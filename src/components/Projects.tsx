import Container from "./Container";
import Title from "./Title";
import { projects } from "../data/projects";
import githubIcon from "../assets/svg/github.svg";

function Projects() {
  return (
    <Container>
      <Title header="projects i've made" />
      <ProjectsGrid />
    </Container>
  );
}

function ProjectsGrid() {
  return (
    <div className="mt-15 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      {projects.map((project) => (
        <div key={project.title}>
          <div className="overflow-hidden rounded-lg border-1 border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={project.img} alt={project.title} className="size-full" />
            <div className="p-5 text-gray-300">
              <h4 className="text-xl font-semibold text-gray-300">{project.title}</h4>
              <p className="my-3 text-sm">{project.description}</p>
              <div>
                <h5 className="pb-3 font-semibold">Technologies:</h5>
                <ul className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <ProjectTech key={tech} tech={tech} />
                  ))}
                </ul>
              </div>
              <div className="mt-5 inline-flex rounded-lg bg-white p-2 hover:bg-gray-200">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectTech({ tech }: { tech: string }) {
  return (
    <li className="inline-block rounded-lg border-1 border-blue-300 p-2 text-sm font-semibold text-blue-300 transition duration-300 ease-in-out hover:border-blue-400 hover:bg-blue-400 hover:text-[#F4F4F5]">
      {tech}
    </li>
  );
}
export default Projects;
