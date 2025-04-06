import { TextFade } from "./TextFade";
import { Contact } from "../types/contact-types";
import githubIcon from "../assets/svg/github.svg";
import emailIcon from "../assets/svg/email-svgrepo-com.svg";
import linkedinIcon from "../assets/svg/linkedin-svgrepo-com.svg";
import hkGif from "../assets/videos/hk-gif.gif";

function Hero() {
  return (
    <div className="flex h-screen items-center justify-center px-6 pb-12 sm:px-10 sm:pb-16 md:pb-20 lg:pb-30 xl:pb-36 2xl:pb-40">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:gap-16 lg:gap-24 xl:gap-32">
        <div className="flex flex-col justify-center">
          <TextFade
            className="flex flex-col flex-wrap items-center justify-center gap-4 sm:items-start"
            direction="up"
          >
            <h1 className="font-rhd text-3xl font-semibold md:text-5xl">Hi, I'm Andrew Cao</h1>
            <h2 className="text-center font-rhd text-base sm:text-start md:text-xl">
              I'm an aspiring Full Stack Developer based in Markham, ON, Canada
            </h2>
            <Contacts />
          </TextFade>
        </div>
        <img
          src={hkGif}
          alt="hk-gif"
          className="size-38 rounded-lg transition-transform duration-300 hover:scale-105 md:size-48 lg:size-60 xl:size-72"
        />
      </div>
    </div>
  );
}

function Contacts() {
  const contacts: Contact[] = [
    {
      icon: githubIcon,
      link: "https://github.com/AndrewC145",
      alt: "github",
    },
    {
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/andrew-cao12/",
      alt: "linkedin",
    },
    {
      icon: emailIcon,
      link: "mailto:andrewcao618@gmail.com",
      alt: "email",
    },
  ];
  return (
    <div className="flex items-center justify-start gap-3">
      {contacts.map((contact) => (
        <div key={contact.alt}>
          <div className="flex cursor-pointer items-center justify-center rounded-lg border-1 border-gray-300 p-1.5">
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <img className="size-6 invert" src={contact.icon} alt={contact.alt}></img>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
