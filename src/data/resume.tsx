import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Adesh Rai",
  initials: "AR",
  url: "https://adesh-rai.vercel.app",
  location: "Mumbai",
  locationLink: "",
  description:
    " I am a skilled web developer and a Diploma in Computer Engineering student, passionate about building innovative web solutions.",
  summary:
    "I&apos;m Adesh Rai, a web developer and Diploma in Computer Engineering student. I&apos;ve gained valuable experience through a frontend development internship at Elight Labs. With a passion for creating user-friendly web solutions, I&apos;m committed to continuous learning and growth in the tech industry.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "TailwindCSS",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adeshrai707@gmail.com",
    tel: "+7304012624",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Adeshraigit",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adeshrai",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adeshrai707",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elight Labs",
      href: "https://elightlabs.com",
      badges: [],
      location: "Remote",
      title: "Frontend Devloper",
      logoUrl: "/Elight.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Worked On Various Projects",
    },
    {
      company: "Nighwan Technologies PVT. LTD.",
      href: "https://nighwantech.com/",
      badges: [],
      location: "Remote",
      title: "Software Devloper Intern",
      logoUrl: "/Nighwan.png",
      start: "October 2024",
      end: "April 2025",
      description:
        "Working On Various Projects",
    },
    
  ],
  education: [
    {
      school: "V.B.M Model High School",
      href: "",
      degree: "10th SSC",
      logoUrl: "/VBM.png",
      start: "2012",
      end: "2022",
    },
    {
      school: "Vidyalankar Polytechnic",
      href: "https://vpt.edu.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/Vpt.png",
      start: "2022",
      end: "2025",
    },
    
  ],
  projects: [
    {
      title: "Smart Chat Bot",
      href: "https://next-js-music-phi.vercel.app",
      dates: "",
      active: true,
      description:
        "A Smart Chat Bot using RAG Model and Vector used for Engineering Admission. built with Next.js and TailwindCSS.Next UI, Datastax, OpenAI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Next UI",
        "Datastax",
        "OpenAI"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Rag-model",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chat.png",
      video:
        "",
    },
    {
      title: "Product-Store",
      href: "https://product-store-jeot.onrender.com",
      dates: "",
      active: true,
      description:
        "A Product Store built with MERN Stack.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Product-Store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // image: "/chat.png",
      video:
        "",
    },
    {
      title: "Music App",
      href: "https://next-js-music-phi.vercel.app",
      dates: "",
      active: true,
      description:
        "A Music Website built with Next.js and TailwindCSS.Aceternity UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://next-js-music-phi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Next.JS",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/music.png",
      video:
        "",
    },
    {
      title: "Todo App",
      href: "https://todo-reactjs-appp.netlify.app/",
      dates: "",
      active: true,
      description:
        "A Todo Website built with React.js and TailwindCSS.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-reactjs-appp.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/React-Project/tree/main/todo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/todo.png",
      video:
        "",
    },
    {
      title: "Video Editor Portfolio",
      href: "https://adityaraut-portfolio.vercel.app/",
      dates: "",
      active: true,
      description:
        "A Portfolio Website built with Next.js and TailwindCSS.Aceternity UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://adityaraut-portfolio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Adi-portfolio",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adi.png",
      video:
        "",
    },
    {
      title: "The Coffe Shop",
      href: "https://the-coffee-shopp.netlify.app",
      dates: "",
      active: true,
      description:
        "A Coffee Website built with Html, Css and Javascript, GSAP",
      technologies: [
        "Html",
        "CSS",
        "Javascript",
        "GSAP"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://the-coffee-shopp.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/coffee.png",
      video:
        "",
    },
  ],
} as const;
