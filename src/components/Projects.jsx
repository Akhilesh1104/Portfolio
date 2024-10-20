import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.png";

const projects = [
  {
    id: 1,
    name: "Prescripto",
    technologies: "MERN Stack",
    image: Project1,
    github: "https://github.com/Akhilesh1104/Prescripto.git",
    link:"https://prescripto-frontend-jb6m.onrender.com"
  },
  {
    id: 2,
    name: "Tomato",
    technologies: "MERN Stack",
    image: Project2,
    github: "https://github.com/Akhilesh1104/Tomato.git",
    link:"https://tomato-frontend-wdeu.onrender.com"
  },
  {
    id: 3,
    name: "BG-Removal",
    technologies: "MERN Stack",
    image: Project4,
    github: "https://github.com/Akhilesh1104/BG-Removal.git",
    link:"https://bg-removal-frontend-virid.vercel.app"
  },
  {
    id: 4,
    name: "Gemini",
    technologies: "MERN Stack",
    image: Project3,
    github: "https://github.com/Akhilesh1104/Gemini.git",
    link:" https://gemini-5lud.onrender.com"
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-20 poppins-regular">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 md:p-10 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-6 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-6">{project.technologies}</p>
              <div className="flex gap-6">
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              >
                GitHub
              </a>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              >
                Preview
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
