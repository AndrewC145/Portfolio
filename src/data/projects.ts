import { ProjectType } from "../types/project-types";
import calmifyImg from "../assets/images/calmify-img.jpg";
import clubhouseImg from "../assets/images/clubhouse.png";
import fileUploaderImg from "../assets/images/uploader.png";
import sayit from "../assets/images/sayit.png";
import ootduck from "../assets/images/ootduck.png";

export const projects: ProjectType[] = [
  {
    img: ootduck,
    title: "OOTDuck",
    description:
      "A progressive full stack web app dedicated to solving issues pertaining to outfits of the day, recommending users random outfits or based on filters",
    technologies: ["React", "Python", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase"],
    github: "https://github.com/DanielZhong24/OOTDuck",
  },
  {
    img: sayit,
    title: "Sayit - Blog API",
    description:
      "A blog full stack web app, allowing account creation, view posts, and upload comments, and admins can create posts",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/AndrewC145/sayit-blog",
  },
  {
    img: fileUploaderImg,
    title: "File Uploader",
    description:
      "A file uploader application where users can upload files and view them in folders. It allows users to create folders, upload files, and view files in a folder.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase"],
    github: "https://github.com/AndrewC145/File-Uploader",
  },
  {
    img: clubhouseImg,
    title: "Clubhouse",
    description:
      "Clubhouse-style application where authenticated users can create and fully view posts",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    github: "https://github.com/AndrewC145/Clubhouse",
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
