import React from "react";
import HeroImage from "../assets/photo.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <br />
      <br />
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-60 h-60 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <br />
      <h1 className="text-4xl font-bold mx-10">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Akhilesh Gupta
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-xl text-gray-300">
        I am specialized in building modern and responsive Web Applications.
      </p>
      <br />
      <br />
      <div className="mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/akhilesh-gupta-3b1093222"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
             hover:scale-110 px-6 py-4 rounded-full hover:border-2 hover:border-white"
        >
          LinkedIn Connect
        </a>
        <a
          href="https://drive.google.com/file/d/1d-IIPjwrbo2JLsi2Qc1Ub2X-ewrQkw1j/view?usp=sharing"
          className="text-white border-2 border-white
            px-6 py-4 rounded-full hover:border-2 hover:border-green-500"
        >
          My Resume
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hero;
