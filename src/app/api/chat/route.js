import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { DataAPIClient } from "@datastax/astra-db-ts";

// Initialize OpenAI client with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

// Initialize DataStax API client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

export async function POST(req) {
  try {
    // Parse the request body to extract messages
    const { messages } = await req.json();

    // Get the latest message content
    const latestMessage = messages[messages?.length - 1]?.content;
    let docContext = "";

    // Create an embedding for the latest message
    const { data } = await openai.embeddings.create({
      input: latestMessage,
      model: "text-embedding-3-small",
    });

    // Connect to the specified collection in the database
    const collection = await db.collection("dataforchat");

    // Perform a vector search to find relevant documents
    const cursor = collection.find(null, {
      sort: {
        $vector: data[0]?.embedding, // Sorting based on the vector similarity
      },
      limit: 5, // Limit the results to 5 documents
    });

    // Convert the result cursor to an array of documents
    const documents = await cursor.toArray();

    // Create a context string from the document descriptions
    docContext = `
          START CONTEXT
          ${documents?.map((doc) => doc.description).join("\n")}
          END CONTEXT
          `;

    // Construct the prompt for RAG-based (retrieval-augmented generation) conversation
    const ragPrompt = [
      {
        role: "system",
        content: `
        You are an AI assistant answering questions as Adesh Rai in his Portfolio App. 
        Format responses using markdown where applicable.
        ${docContext}
        If the answer is not provided in the context, the AI assistant will say, 
        "I'am sorry, I do not know the answer".
        `,
      },
    ];

    // Call OpenAI's GPT-3.5 Turbo model for chat completions
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [...ragPrompt, ...messages],
    });

    // Stream the response back to the client
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    console.error("Error handling POST request:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
