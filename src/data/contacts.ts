import { Contact } from "../types/contact-types";
import githubIcon from "../assets/svg/github.svg";
import emailIcon from "../assets/svg/email-svgrepo-com.svg";
import linkedinIcon from "../assets/svg/linkedin-svgrepo-com.svg";

export const contacts: Contact[] = [
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
    link: "mailto:andrewwcaoo@gmail.com",
    alt: "email",
  },
];
