function Header() {
  return (
    <header className="bg-opacity-75 fixed top-0 right-0 left-0 z-50 bg-black p-4 text-white sm:px-6 md:px-8 lg:px-9 xl:px-10">
      <nav className="flex justify-between bg-transparent font-sans font-semibold">
        <p>Andrew</p>
        <ul className="flex cursor-pointer gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          <li className="transition-colors duration-150 hover:text-blue-200">Home</li>
          <li className="transition-colors duration-150 hover:text-blue-200">About</li>
          <li className="transition-colors duration-150 hover:text-blue-200">Experience</li>
          <li className="transition-colors duration-150 hover:text-blue-200">Projects</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
