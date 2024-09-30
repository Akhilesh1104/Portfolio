import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 text-center sm:text-left"'>
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-3xl font-bold hidden md:inline mt-2 poppins-regular cursor-pointer transform transition-transform duration-300 hover:scale-110">
          Akhilesh
        </div>
        <div className="space-x-6 mt-2 text-xl">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/akhilesh-gupta-3b1093222"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-2"
        >
          LinkedIn Connect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
