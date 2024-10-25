import React, { useState, useEffect } from "react";
import { handleDownload } from "./downloadPDF";

const Home = () => {
  const [homeData, setHomeData] = useState({
    title: "Hi, I Am",
    name: "Akash Adhikary",
    subTitle: "And I Am A FullStack Developer",
    description:
      "2 years of Work experience in React.js, JavaScript, CSS, Html, Git | Knowledge and experience in Figma, Redux, SpringBoot, Web Development, Frontend Technologies, MySql and Debugging | Open to work for Frontend Engineer, Web Developer, Software Developer",
    image: "Akash2.png",
  });

  const [iconData, setIconData] = useState([
    {
      id: "1",
      link: "https://www.linkedin.com/in/akash-adhikary-1825b8266/",
      icon: <i className="fab text-3xl fa-linkedin"></i>,
    },
    {
      id: "2",
      link: "https://www.instagram.com/akashadhikary07/",
      icon: <i className="fab text-3xl fa-instagram"></i>,
    },
    {
      id: "3",
      link: "https://www.facebook.com/akashadhikary07/",
      icon: <i className="fab  text-3xl fa-facebook"></i>,
    },
  ]);

  const handleClick = () => {
    const url = "Akash_Adhikary_Resume.pdf";
    // handleDownload(url);
    window.open(url, "_blank")
  };

  return (
    <>
      <div
        className="flex flex-col-reverse lg:flex-row justify-between items-center mt-12 py-5 px-20"
        style={{
          backgroundImage: `url('image.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="space-y-5 w-2/3 lg:w-full lg:mx-auto">
            <h3 className="text-3xl font-semibold">{homeData.title}</h3>
            <h1 className="mt-4 text-5xl font-bold">{homeData.name}</h1>
            <h2 className="mt-4 text-3xl">{homeData.subTitle}</h2>
            <p className="mt-4">{homeData.description}</p>
            <div className="icons-container mt-3 flex space-x-4">
              {iconData.map((elem) => (
                <a
                  key={elem.id}
                  className="w-10 h-10 cursor-pointer hover:bg-gray-500 rounded-full flex justify-center items-center"
                  id={elem.id}
                  href={elem.link}
                  target="_blank"
                >
                  {elem.icon}
                </a>
              ))}
            </div>
            <div className="mt-2 flex">
              <button
                className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-900"
                onClick={handleClick}
              >
                Open CV
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-center lg:w-1/2">
          <img
            className="rounded-full w-96 h-96 shadow-xl"
            src={homeData.image}
            alt="Akash Adhikary"
          />
        </div> */}
      </div>
    </>
  );
};

export default Home;
