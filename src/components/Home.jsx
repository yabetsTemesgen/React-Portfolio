import React from "react";
import HeroImage from "../assets/heroImage.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate to-blue-900 top-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1
            style={{ paddingBottom: 15 }}
            className="heading text-white text-4xl"
          >
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h2 className="lg:text-6xl sm:text-7xl font-bold text-white">
            I'm Yabets Temesgen
          </h2>
          <p className="text-white">Full stack developer</p>
          <p className="text-gray-500 py-4 max-w-md hidden">
            I have experience in building and desgining full stack web
            applications. Currently, I am working on web application using
            technologies like React, Tailwind, Next JS and RestAPIs.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-800 to-blue-700 cursor-pointer"
            >
              works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto my-auto w-3/4 lg:w-3/4 sm:w-2/4 mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
