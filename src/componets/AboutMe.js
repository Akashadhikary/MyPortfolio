import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AboutMe = () => {

  const navigate = useNavigate();

  const [aboutData, setAboutData] = useState({
    img: 'Akash.jpg',
    title: "React Js developer and  a passionate learner.",
    desc: "I have a strong technical proficiency in languages like JavaScript, HTML, CSS, and Java, along with experience working with frameworks such as React.js, Redux, Bootstrap, and Spring Boot. I am also familiar with web services like RESTful and databases like MySQL. My experience with various IDE tools like Visual Studio Code, Intellij, Jira, Mobaxterm, and WinSCP along with version control tools like Git and testing tools like Postman and GUI make me well-equipped for the role.",
    button: {
      text: 'Read More',
      link: "/read-more"
    }
  });

   const handleClick = (event) => {
     //window.location.href = '/read-more'
     event.preventDefault();
     const res = navigate('/read-more');
     console.log(res);
   }

  return (
    <>
      <h1 className='text-4xl pt-16 font-bold underline text-center'>About Me</h1>
      <div className='flex flex-col lg:flex-row justify-between items-center mt-10 py-5 bg-gray-100'>
        <div className='w-full lg:w-1/2 flex justify-center mb-5 lg:mb-0'>
          <img className="w-fit rounded-full h-96 shadow-xl" src={aboutData.img} alt='Profile Picture' />
        </div>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='space-y-5 w-2/3 lg:w-full lg:mx-auto'>
            <h1 className='text-5xl font-semibold text-center lg:text-left'>{aboutData.title}</h1>
            <p className='text-center lg:text-left'>{aboutData.desc}</p>
            <div className='flex justify-center lg:justify-start'>
              <NavLink to={aboutData.button.link}>
                <button className='px-4 py-2 mt-5 text-white bg-black rounded-full shadow-xl text-1xl'>{aboutData.button.text}</button>
              </NavLink>
              {/* <button className='px-4 py-2 mt-5 text-white bg-black rounded-full shadow-xl text-1xl' onClick={handleClick}>{aboutData.button.text}</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

