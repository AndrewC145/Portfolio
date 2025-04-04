import Container from "./Container";
import Title from "./Title";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <Container>
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
        <div className="pb-6 text-gray-300 lg:pb-8" key={experience.id}>
          <h2 className="mb-3 text-lg font-semibold md:text-xl lg:text-2xl">
            {experience.title} @ {experience.company}
          </h2>
          <h3 className="mb-3">{experience.date}</h3>
          <h4>{experience.description}</h4>
          <div className="mt-5 w-fit space-x-4">
            {experience.skills.map((skill, index) => (
              <span
                className="inline-block rounded-lg border-1 border-blue-300 p-2 text-sm font-semibold text-blue-300 transition duration-300 ease-in-out hover:border-blue-400 hover:bg-blue-400 hover:text-[#F4F4F5]"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
