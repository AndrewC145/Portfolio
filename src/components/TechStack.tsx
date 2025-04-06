import { stack } from "../types/stack";
import Container from "./Container";
import Title from "./Title";
import { IoLogoCss3, IoLogoPython, IoLogoHtml5 } from "react-icons/io";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiJavascript,
  SiReact,
  SiVite,
} from "react-icons/si";

const techSkills: stack[] = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="text-3xl" />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 className="text-3xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-3xl" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython className="text-3xl" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-3xl" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-3xl" />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack className="text-3xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-3xl" />,
  },
  {
    name: "Github",
    icon: <FaGithub className="text-3xl" />,
  },
];

function TechStack() {
  return (
    <Container>
      <div className="h-full w-full">
        <Title header="technologies" />
        <div className="flex flex-wrap items-center justify-start gap-4 py-4">
          {techSkills.map((skill, index) => (
            <div
              className="flex items-center justify-center rounded-lg border-1 border-gray-600 px-3 py-4 text-nowrap text-gray-200"
              key={index}
            >
              {skill.icon}
              <p className="ml-3 text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default TechStack;
