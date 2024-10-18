import React from "react";

const AboutMyDetails = () => {
  return (
    <div className="container mx-auto h-full my-28 px-4">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-center underline">
          About Me
        </h2>

        <div className="service-1 space-y-4 shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4  bg-slate-100 p-5 hover:bg-slate-200">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="mb-4">
            <label
              className="block text-black text-base font-extrabold mb-2"
              htmlFor="name"
            >
              FullStack Developer
            </label>
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Capgemini
            </label>
            <p className="text-gray-700 text-base font-medium mb-2">
              Full-time {"|"} Oct 2022 to Present
            </p>
            <p className="text-gray-700 text-base font-medium">
              A highly motivated and energetic Front-End Developer, dedicated to understanding and meeting client needs. Possesses in-depth knowledge of modern JavaScript frameworks with over 2 years of experience in the development and implementation of object-oriented and web-based enterprise applications. Successfully implemented solutions using Agile (SCRUM) methodology. Proficient in JavaScript, React.js, MERN, Redux, HTML, CSS, as well as unit and manual testing.
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="age"
            >
              Project Name
            </label>
            <p className="text-gray-700 text-sm font-medium">RTCC Web</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-lg font-bold mb-2"
              htmlFor="location"
            >
              Top 5 Key Skills: HTML , CSS (CSS3 , Tailwind CSS) , JavaScript ,
              React.js , Git
            </label>
            {/* <p className="text-gray-700 text-lg font-medium">New York, USA</p> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="occupation"
            >
              Location
            </label>
            <p className="text-gray-700 text-lg font-medium">
              Gurgaon , Hariyana
            </p>
          </div>
        </div>

        <div className="service-1 space-y-4 shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4  bg-slate-100 p-5 hover:bg-slate-200">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              B.Tech(CSE)
            </label>
            <p className="text-gray-700 text-lg font-medium mb-2">
              Institute Of Engineering & Management, Kolkata
            </p>
            <p className="text-gray-700 text-base font-medium mb-2">
              2018-2022 {"|"} 8.7 CGPA {"|"} Full Time
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Class XII
            </label>
            <p className="text-gray-700 text-lg font-medium mb-2">
              Vidyasagar Vidyapith, Midnapur
            </p>
            <p className="text-gray-700 text-base font-medium mb-2">
              2017 {"|"} 83%
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Class X
            </label>
            <p className="text-gray-700 text-lg font-medium mb-2">
              Balichak Bhajahari Institute, Balichak
            </p>
            <p className="text-gray-700 text-base font-medium mb-2">
              2015 {"|"} 89%
            </p>
          </div>
        </div>

        <div className="service-1 space-y-4 shadow-lg rounded-xl px-8 pt-6 pb-8 bg-slate-100 p-5 hover:bg-slate-200">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <p className="text-gray-700 text-lg font-medium">Akash Adhikary</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <p className="text-gray-700 text-lg font-medium">25</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <p className="text-gray-700 text-lg font-medium">Gurgaon, India</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Permenant Address
            </label>
            <p className="text-gray-700 text-lg font-medium">
              Kharagpur, West Bengal, India
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <p className="text-gray-700 text-lg font-medium">
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMyDetails;
