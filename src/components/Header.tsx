import { useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 right-0 left-0 z-50 bg-black/50 p-4 text-[#F4F4F5] sm:p-5 md:p-6">
      <nav className="flex items-center justify-between bg-transparent font-sans font-semibold">
        <p>ANDREW</p>
        <div className="hidden sm:flex">
          <ul className="flex cursor-pointer gap-4 uppercase sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <ListItems />
          </ul>
        </div>
        <div className="relative items-center sm:hidden">
          <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <ul className="absolute right-1 space-y-3 border-2 border-gray-400 bg-black p-4 text-center font-rhd">
              <ListItems />
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

function ListItems() {
  return (
    <>
      <li className="transition-colors duration-150 hover:text-blue-200">Home</li>
      <li className="transition-colors duration-150 hover:text-blue-200">About</li>
      <li className="transition-colors duration-150 hover:text-blue-200">Experience</li>
      <li className="transition-colors duration-150 hover:text-blue-200">Projects</li>
    </>
  );
}

export default Header;
