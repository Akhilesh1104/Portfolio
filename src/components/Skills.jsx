import React from "react";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeJs from "../assets/NodeJs.jpg";
import Reac from "../assets/React.png";
import MongoDB from "../assets/Mongo.png";
import Figma from "../assets/Figma.png";
import Express from "../assets/Express.png";
import SQL from "../assets/MySQL.jpg";
import Github from "../assets/Github.png";

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-20 poppins-regular">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pl-10">
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={MongoDB}
            alt="MongoDB Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Express}
            alt="Express Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Reac}
            alt="React Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={NodeJs}
            alt="NodeJs Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Tailwind}
            alt="Tailwind Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Bootstrap}
            alt="Bootstrap Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Figma}
            alt="Tailwind Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={Github}
            alt="Github Image"
          />
          <img
            className="h-40 w-60 transform transition-transform duration-300 hover:scale-110 rounded-2xl cursor-pointer"
            src={SQL}
            alt="SQL Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
