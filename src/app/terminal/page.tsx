"use client";

import { useChat } from "ai/react";
import { FormEvent, useRef, useEffect, KeyboardEvent } from "react";

export default function Chatbot() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const noMessages = !messages || messages.length === 0;

  // Auto resize the textarea input based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on scroll height
    }
  }, [input]);

  // Auto scroll to bottom when new message is added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle the "Enter" key press to submit the form
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents adding a newline in the textarea
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <main className="h-full text-green-500 flex items-center justify-center">
      {/* Terminal Container */}
      <div className="w-full max-w-3xl p-4 bg-black border border-green-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-green-500 mb-4">Adesh@:~$</h1>

        {/* Chat Messages Section */}
        <section
          ref={chatBoxRef}
          className="flex-1 flex flex-col space-y-2 mb-4 overflow-y-auto p-2 bg-black text-green-500 font-mono text-sm border border-green-500 rounded"
          style={{ maxHeight: "400px" }}
        >
          {noMessages ? (
            <div className="text-green-500">[Start typing your command...]</div>
          ) : (
            messages.map((message, index) => (
              <div key={`message-${index}`} className="whitespace-pre-wrap">
                <span className="text-green-500">
                  {message.role === "user" ? "User@:~$" : "@Terminal:~$"}
                </span>{" "}
                {message.content}
              </div>
            ))
          )}

          {isLoading && (
            <div className="text-green-500 animate-pulse">@Terminal:~$ Thinking...</div>
          )}
        </section>

        {/* Input Section */}
        <form
          className="w-full flex items-center"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <span className="mr-2 text-green-500 font-mono">User@:~$</span>
          <textarea
            ref={textareaRef}
            onKeyDown={handleKeyDown} // Listen for "Enter" key press
            onChange={handleInputChange}
            value={input}
            className="flex-1 bg-black text-green-500 font-mono text-sm border-none focus:outline-none resize-none overflow-hidden"
            placeholder="Type your command here..."
            rows={1}
            style={{ overflow: "hidden" }}
          />
        </form>
      </div>
    </main>
  );
}
