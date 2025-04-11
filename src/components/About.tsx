import pfp from "../assets/images/IMG_1384.jpg";
import Title from "./Title";
import Container from "./Container";

function About() {
  return (
    <Container id="about">
      <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
        <div className="flex-1 flex-col space-y-6">
          <Title header="about me" />
          <Paragraph />
        </div>
        <img className="size-60 rounded-2xl object-cover sm:size-72" src={pfp}></img>
      </div>
    </Container>
  );
}

function Paragraph() {
  return (
    <>
      <p className="leading-8 text-gray-300">
        i am currently a first year student at york university studying computer science for
        software development. i have a strong passion for full-stack and web development. i enjoy
        working with front end technologies such as react, tailwind, and javascript and typescript
        to build my projects. in my free time, i enjoy playing video games and looking for fashion
        inspiration.
      </p>
      <p className="leading-8 text-gray-300">
        i am currently looking for internships and co-op opportunities to gain experience in the
        field. i am always eager to learn new technologies and improve my skills. i am excited to
        see where my journey in computer science will take me.
      </p>
    </>
  );
}

export default About;
