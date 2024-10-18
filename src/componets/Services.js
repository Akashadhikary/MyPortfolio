import React, { useState } from "react";

const Services = () => {
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      title: "E-commerce website:",
      description: "In this project I created e-commese website using useContext hook for managing states.Used axios for api calls.Added filters like search filter,color filter, price filter and some other filters.In product section I made grid view and list view. In contact section I use google map.",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "ecommerse_video.mp4",
      gitRepo: "https://github.com/Akashadhikary/ecommerse",
    },
    {
      id: 2,
      title: "Food Cart Website Using Redux Toolkit:",
      description:
        "In this project I created food-cart project with redux-toolkit and created add to cart, remove cart functionalities. Also used bootstrap for icons.",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "Food_cart_video.mp4",
      gitRepo: "https://github.com/Akashadhikary/food_cart",
    },
    {
      id: 3,
      title: "Podcast application using MERN Stack:",
      description:
        "Developed a MERN stack website called Podcaster, utilizing React for the frontend, Node.js for the backend, and MongoDB as the database. Tailwind CSS was used for styling, ensuring a fully responsive and functional design. For authentication, I implemented JWT tokens and cookies to manage user data, while using Multer for file uploads and Bcrypt for password encryption.",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "Podcaster.mp4",
      gitRepo: "https://github.com/Akashadhikary/podcaster",
    },
  ]);

  const [playingVideoId, setPlayingVideoId] = useState(null);

  const togglePlay = (id) => {
    setPlayingVideoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center underline">My Projects</h1>
      <div className="main-service-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
        {projectData.map((elem) => (
          <div
            key={elem.id}
            className={`service-1 flex flex-col justify-between space-y-4 shadow-lg rounded-xl bg-slate-100 p-5 text-center hover:bg-slate-200`}
          >
            <div>
              <h1 className="text-3xl font-bold">{elem.title}</h1>
              <p>{elem.description}</p>
            </div>
            <div className="space-x-3">
              <button
                className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl"
                onClick={() => togglePlay(elem.id)}
              >
                {playingVideoId === elem.id ? 'Close' : elem.actionBtn1}
              </button>
              {playingVideoId === elem.id && elem.video && (
                <video
                  className="mt-4 mx-2"
                  controls
                  autoPlay
                  onPause={() => setPlayingVideoId(null)}
                  onEnded={() => setPlayingVideoId(null)}
                >
                  <source src={elem.video} type="video/mp4" />
                </video>
              )}
              <button className="px-4 py-2 mt-4 text-white bg-black rounded-full shadow-xl text-1xl">
                <a href={elem.gitRepo} target="_blank" rel="noreferrer">{elem.actionBtn2}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

