import React from "react";
import { generateEmail } from "./EmailMe";

const ContactMe = () => {
  const handleClick = () => {
    generateEmail({
      emailSubject: "Impressed with your Portfolio",
      emailBody: "Hello Akash,",
    });
  };

  return (
    <div className="container mx-auto h-full my-20 px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 underline text-center">Contact</h2>
      <div className="service-1 space-y-4shadow-lg rounded-xl px-8 pt-6 pb-6 bg-slate-100 p-5 hover:bg-slate-200">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <div className="mb-4">
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
            htmlFor="location"
          >
            Mobile Number:
          </label>
          <p className="text-gray-700 text-lg font-medium">+91 8513993774</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="occupation"
          >
            Email Id:
          </label>
          <p className="text-gray-700 text-lg font-medium">
            akashadhikary@gmail.com
          </p>
        </div>
        <button
          className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl"
          type="button"
          onClick={handleClick}
        >
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
