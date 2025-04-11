import Container from "./Container";
import Title from "./Title";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <Container id="experience">
      <div className="flex flex-col">
        <Title header="places i've worked at" />
        <WorkExperiences />
      </div>
    </Container>
  );
}

function WorkExperiences() {
  return (
    <>
      {experiences.map((experience) => (
        <div
          className="mt-4 rounded-lg border-1 border-gray-700 p-5 text-gray-300"
          key={experience.id}
        >
          <h2 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
            {experience.title} @ {experience.company}
          </h2>
          <h3 className="mb-3">{experience.date}</h3>
          <h4 className="text-sm sm:text-base">{experience.description}</h4>
          <div className="mt-5 w-fit space-x-4">
            {experience.skills.map((skill, index) => (
              <TechnicalSkills key={index} skills={skill} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function TechnicalSkills({ skills }: { skills: string }) {
  return (
    <span className="inline-block rounded-lg border-1 border-blue-300 p-2 text-sm font-semibold text-blue-300 transition duration-300 ease-in-out hover:border-blue-400 hover:bg-blue-400 hover:text-[#F4F4F5]">
      {skills}
    </span>
  );
}

export default Experience;
