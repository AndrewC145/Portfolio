import { stack } from "../types/stack";
import Container from "./Container";
import Title from "./Title";
import { IoLogoCss3, IoLogoPython, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiJavascript,
  SiReact,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const techSkills: stack[] = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="size-7" />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 className="size-7" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="size-7" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-7" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython className="size-7" />,
  },
  {
    name: "React",
    icon: <SiReact className="size-7" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="size-7" />,
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs className="size-7" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="size-7" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-7" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="size-7" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="size-7" />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack className="size-7" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="size-7" />,
  },
  {
    name: "Github",
    icon: <FaGithub className="size-7" />,
  },
];

function TechStack() {
  return (
    <Container>
      <div className="h-full w-full">
        <Title header="technologies" />
        <div className="grid grid-cols-2 gap-4 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-start">
          {techSkills.map((skill, index) => (
            <div
              className="flex items-center justify-center rounded-lg border-1 border-gray-600 px-3 py-4 text-nowrap text-gray-200"
              key={index}
            >
              {skill.icon}
              <p className="ml-3 text-sm sm:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default TechStack;
