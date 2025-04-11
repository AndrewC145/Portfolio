import { Contact } from "../types/contact-types";

function Icon({ contact }: { contact: Contact }) {
  return (
    <a href={contact.link} target="_blank" rel="noopener noreferrer">
      <img className="size-6 invert" src={contact.icon} alt={contact.alt}></img>
    </a>
  );
}

export default Icon;
