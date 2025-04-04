import Container from "./Container";
import Title from "./Title";

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
  const experiences: {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
  }[] = [
    {
      id: 1,
      title: "Web Developer Assistant",
      company: "U+ Education",
      date: "Feb 2023 - Jun 2023",
      description:
        "Developed and designed websites for government partnered organizations, collaborating with various clients to create tailored solutions. Developed a web page using WordPress to advertise langualge learning programs for children and seniors leading to a 15% increase in enrollment. Organized data for 350+ users and multiple programs using Power BI, improving data accessibility and visualization.",
      skills: ["Wix", "WordPress", "Power BI"],
    },
  ];

  return (
    <div className="">
      {experiences.map((experience) => (
        <div key={experience.id}>
          <h2 className="mb-3 text-lg md:text-xl lg:text-2xl">
            {experience.title} @ {experience.company}
          </h2>
          <h3 className="mb-3">{experience.date}</h3>
          <h4>{experience.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default Experience;
