import React, { useState } from "react";
import { generateEmail } from "./EmailMe";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [myName, setMyName] = useState("Akash Adhikary");

  const [mobileView, setMobileView] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About Me", link: "/read-more" },
    { id: 3, title: "Contact", link: "/contact" },
  ];

  const handlenameClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-8 lg:px-12 py-2 bg-blue-100 shadow-md">
        <div className="flex justify-between items-center ">
          <div className="logo brand-name w-2/6">
            <Link
              className="text-2xl font-semibold flex justify-start items-center gap-2"
              to="/"
              onClick={handlenameClick}
            >
              {myName}
            </Link>
          </div>
          <div className="w-2/6 lg:flex hidden items-center justify-center">
            {navLinks.map((item) => (
              <div
                key={item.id}
                className="ml-4 hover:bg-gray-100 rounded transition-all duration-300"
              >
                <Link
                  to={item.link}
                  className="block py-2 px-3 hover:font-semibold"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="w-4/6 lg:hidden flex items-center justify-end z-50">
            <button
              className="text-4xl"
              onClick={() => setMobileView(!mobileView)}
            >
              {mobileView ? <CgClose /> : <MdOutlineMenuBook />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileView && (
          <div className="lg:hidden flex flex-col items-center bg-blue-100 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="block py-2 px-3 text-lg hover:bg-gray-200 w-full text-center"
                onClick={() => setMobileView(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
