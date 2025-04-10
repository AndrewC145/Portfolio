import Icon from "./Icon";
import { contacts } from "../data/contacts";

function Footer() {
  return (
    <footer className="flex justify-center p-4">
      <div className="w-[40%] border-t border-gray-600 py-6 text-center">
        <p className="text-white">&copy; 2025 Created By Andrew Cao</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          {contacts.map((contact) => (
            <Icon key={contact.alt} contact={contact} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
