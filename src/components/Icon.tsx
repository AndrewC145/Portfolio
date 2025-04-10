function Icon({ contact }: { contact: { icon: string; alt: string; link: string } }) {
  return (
    <a href={contact.link} target="_blank" rel="noopener noreferrer">
      <img className="size-6 invert" src={contact.icon} alt={contact.alt}></img>
    </a>
  );
}

export default Icon;
