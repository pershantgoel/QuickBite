import React from "react";
import aboutus from "../assets/About.jpeg";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col lg:flex-row my-16">
      <div className="lg:w-[40%] bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 font-semibold font-serif text-2xl">
          Pershant Goel
        </p>
        <p className=" font-serif font-light text-md my-1">
          Frontend Developer
        </p>
        <p className="font-serif text-base mb-4 my-9 text-gray-500">
          Passionate and skilled Front-End Developer dedicated to crafting
          end-to-end web solutions that seamlessly combine artistic creativity
          with technical excellence.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/pershant-goel-a77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      {/* <div className="lg:w-[40%] lg:mx-6 mt-6 lg:mt-0">
        <img
          src={aboutus}
          alt="about-us-img"
          className="rounded-full w-52 h-52 object-cover shadow-xl"
        />
      </div> */}
    </div>
  );
};

export default About;
