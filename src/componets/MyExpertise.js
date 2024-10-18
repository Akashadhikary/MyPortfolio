import React, { useState } from "react";
import { handleDownload } from "./downloadPDF";

const MyExpertise = () => {
  const [skills, setSkills] = useState([
    { id: 1, title: "React.js" },
    { id: 2, title: "Html" },
    { id: 3, title: "CSS" },
    { id: 4, title: "Javascript" },
    { id: 5, title: "Redux" },
    { id: 6, title: "Bootstrap" },
    { id: 7, title: "node.js" },
    { id: 8, title: "MERN Stack" },
    { id: 9, title: "Spring Boot" },
    { id: 10, title: "git" },
    { id: 12, title: "DevOps" },
    { id: 13, title: "figma" },
    { id: 14, title: "jquery" },
    { id: 15, title: "Postman" },
    { id: 17, title: "web application" },
  ]);

  const handleClick = () => {
    const url = "Akash_Adhikary_Cover_Letter.pdf";
    window.open(url, "_blank")
  };

  return (
    <>
      <h1 className="text-4xl mb-10 font-bold underline text-center">
        My Expertise
      </h1>
      <div
        className="flex flex-col lg:flex-row justify-between items-center py-5 px-20"
        style={{
          backgroundImage: `url('image.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full lg:w-1/2 mx-auto lg:mx-10">
          <h1 className="text-4xl font-bold text-center lg:text-left">
            I love these technologies
          </h1>
          <p className="text-center lg:text-left">
            my passion and enthusiasm for the diverse array of tools and frameworks that power modern software development. From front-end technologies like HTML, CSS, and JavaScript to powerful libraries and frameworks such as React.js and Redux, each technology represents a unique opportunity for creativity and innovation.
          </p>
          <button
            className="block mx-auto lg:mx-0 px-4 py-2 mt-4 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-900"
            onClick={handleClick}
          >
            Open Cover Letter
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="flex flex-wrap justify-center">
            {skills.map((elem) => (
              <p
                key={elem.id}
                className="bg-gray-300 mx-1 my-2 px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-gray-400"
              >
                {elem.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;

