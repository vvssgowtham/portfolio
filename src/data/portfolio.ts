import {
  HomeIcon,
  NotebookIcon,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  ExternalLink,
} from "lucide-react";

export const DATA = {
  name: "Gowtham",
  initials: "GK",
  url: "https://vvssgowtham.dev",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Backend engineer building production-ready APIs and integrations.",
  summary:
    "Backend engineer building production-ready APIs and integrations. Skilled in React, Java/Spring Boot, Node.js, Docker, MongoDB, Twilio",
  avatarUrl: "/Profile.jpg",
  skills: [
    "React",
    "Typescript",
    "Spring Boot",
    "Twilio",
    "RestAPI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postgres",
    "Prisma",
    "Firebase",
    "Docker",
    "Java",
    "Next.js",
    "AWS",
    "gRPC",
    "n8n",
    "OpenAI",
    "RAG",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "#projects",
      icon: NotebookIcon,
      label: "Projects",
    },
  ],
  contact: {
    email: "mailto:gowthamvvss@gmail.com",
    tel: "+91936782544",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vvssgowtham",
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vvssgowtham",
        icon: Linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vvssgowtham",
        icon: Twitter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gowthamvvss@gmail.com",
        icon: Mail,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Phenom People pvt Ltd",
      href: "https://www.phenom.com",
      badges: [],
      location: "Onsite - Hyderabad, India",
      title: "Product Development Engineer - 1",
      logoUrl: "/phenom.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Engineered a production-ready, multi-tenant voice calling platform using the Twilio SDK to manage both incoming and outgoing calls. Responsible for the entire lifecycle, from the initial Proof of Concept (POC) to designing the core database schemas.",
    },
    {
      company: "Kodem Legal Technologies",
      href: "https://kodemtechnologies.com/",
      badges: [],
      location: "Onsite - Hyderabad, India",
      title: "Software Development Intern",
      logoUrl: "/kodem.png",
      start: "Dec 2024",
      end: "May 2025",
      description:
        "Gained hands-on experience with Spring Boot and gRPC, contributing to backend service development. Designed and implemented an Invoice Linking feature integrated with QuickBooks, improving workflow efficiency for case workers and reducing manual tasks. Developed automation scripts using Selenium, including form-filler Lambdas for USCIS and Passport applications such as Form I-129 and DS-160.",
    },
    {
      company: "Perky Digital Pvt Ltd",
      href: "https://zaver.one",
      badges: [],
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/perky.jpeg",
      start: "Feb 2024",
      end: "Apr 2024",
      description:
        "Developed a flexible data management system with MongoDB, enabling data scraping and username extraction via regex/APIs, integrated OpenAI NLP API for sentiment analysis and user insights, and implemented an Excel export feature with 94% accuracy across 100+ records.",
    },
  ],
  projects: [
    {
      title: "DocuTalk - Chat with your PDF",
      href: "https://pdfchat.vvssgowtham.dev/",
      dates: "Dec 2025",
      active: true,
      description:
        "AI-powered PDF chat application that allows users to upload documents and ask questions in natural language. Uses a Retrieval-Augmented Generation (RAG) architecture with vector embeddings and semantic search to deliver accurate, context-aware, real-time responses.",
      technologies: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Hugging Face Inference",
      ],
      links: [
        {
          type: "Website",
          href: "https://pdfchat.vvssgowtham.dev/",
          icon: Globe,
        },
      ],
      image: "/chatwithpdf.png",
    },
    {
      title: "ScreenArchives",
      href: "https://screenarchives.netlify.app/",
      dates: "Jan 2024",
      active: true,
      description:
        "A comprehensive movie database application allowing users to search, view details, and archive their favorite films. Built with performance and user experience in mind.",
      technologies: ["React.js", "TMDB API", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://screenarchives.netlify.app/",
          icon: Globe,
        },
      ],
      image: "",
    },
    {
      title: "n8nGmailSummarizer",
      href: "https://n8n-gmail.vvssgowtham.dev/",
      dates: "Aug 2025",
      active: true,
      description:
        "An n8n workflow that leverages the Gmail and OpenAI APIs to automatically summarize emails. It fetches unread emails, generates concise summaries using OpenAI, and sends these summaries to Telegram, enhancing productivity and email management.",
      technologies: ["n8n", "Gmail API", "OpenAI API", "Telegram API"],
      links: [
        {
          type: "Website",
          href: "https://n8n-gmail.vvssgowtham.dev/",
          icon: Globe,
        },
      ],
      image: "/n8n.png",
    },
    {
      title: "BlogHere",
      href: "https://bloghere.vercel.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A dynamic and secure blogging platform built on the MERN stack. Harnessing the power of JWT (JSON Web Tokens) for robust authentication, Blog Here offers a seamless and personalized blogging experience. Explore, create, and connect.",
      technologies: [
        "React.js",
        "Tanstack Query",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bloghere.vercel.app/",
          icon: Globe,
        },
        {
          type: "Source",
          href: "https://github.com/vvssgowtham/BlogHere",
          icon: Github,
        },
      ],
      image: "/BlogHere.jpg",
    },
    {
      title: "Instant Transfer",
      href: "https://instant-transfer-virid.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "Instant Transfer is a secure, React-based application for fast and easy money transfers, allowing users to sign up, log in, view balance, and send money with a sleek, user-friendly interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://instant-transfer-virid.vercel.app/",
          icon: Globe,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: Github,
        },
      ],
      image: "/transfer.webp",
    },
    {
      title: "InstaSave",
      href: "https://instasave-olive.vercel.app/",
      dates: "Dec 2023",
      active: true,
      description:
        "InstaSave is a ReactJS-based web app, using NodeJS and ExpressJS for backend operations. It integrates with the InstaSaver API, allowing users to download Instagram content directly via a link. Tailwind CSS ensures responsiveness, providing a sleek and user-friendly experience.",
      technologies: ["React.js", "Node.js", "Express.js", "API"],
      links: [
        {
          type: "Website",
          href: "https://instasave-olive.vercel.app/",
          icon: Globe,
        },
        {
          type: "Source",
          href: "https://github.com/vvssgowtham/InstaSave",
          icon: Github,
        },
      ],
      image: "/InstaSave.jpg",
    },
  ],
} as const;
