import { ProjectType } from "../types/project-types";
import todoImg from "../assets/images/todo-img.jpg";
import ecommerceApp from "../assets/images/ecommerce-app.jpg";
import cvApplication from "../assets/images/cv-application-img.jpg";
import memoryCard from "../assets/images/memory-card-game.jpg";
import calmifyImg from "../assets/images/calmify-img.jpg";

export const projects: ProjectType[] = [
  {
    img: todoImg,
    title: "Todo List",
    description:
      "A simple todo list app built with HTML, CSS, JS. It allows users to add, edit, and delete tasks, and it uses local storage to persist data.",
    technologies: ["HTML", "CSS", "Javascript", "Webpack"],
    github: "https://github.com/AndrewC145/To-Do-List",
  },
  {
    img: ecommerceApp,
    title: "Embers",
    description:
      "A front-end e-commerce application built with React, allowing users to browse products and add them to their cart.",
    technologies: ["React", "Tailwind CSS", "Vite", "Javascript"],
    github: "https://github.com/AndrewC145/Ecommerce-App",
  },
  {
    img: cvApplication,
    title: "CV Application",
    description:
      "A CV application built with React, allowing users to create and manage their CVs.",
    technologies: ["React", "Tailwind CSS", "Vite", "Javascript"],
    github: "https://github.com/AndrewC145/CV-Application",
  },
  {
    img: memoryCard,
    title: "Memory Card Game",
    description: "A memory card game built with React, allowing users to test their memory skills.",
    technologies: ["React", "Tailwind CSS", "Vite", "Javascript"],
    github: "https://github.com/AndrewC145/Memory-Card",
  },
  {
    img: calmifyImg,
    title: "Calmify",
    description:
      "A mindfulness front-end app powered by Ollama API, allowing users to practice mindfulness and meditation, but also chat with an AI therapist.",
    technologies: ["HTML", "CSS", "Javascript", "Ollama API", "Webpack"],
    github: "https://github.com/AndrewC145/Calmify",
  },
];
