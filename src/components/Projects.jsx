import React from "react";
import task from "../assets/projects/task.png";
import authentication from "../assets/projects/authentication.png";
import employee from "../assets/projects/employee.png";
import ims from "../assets/projects/ims.png";
import rest from "../assets/projects/rest.png";
import vidly from "../assets/projects/vidly.png";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: task,
      href: "https://github.com/yabetsTemesgen/Task-Manager-frontend.git",
    },
    {
      id: 2,
      src: ims,
      href: "https://github.com/yabetsTemesgen/IMS.git",
    },
    {
      id: 3,
      src: employee,
      href: "https://github.com/yabetsTemesgen/Employee_Info.git",
    },
    {
      id: 4,
      src: rest,
      href: "https://github.com/yabetsTemesgen/RESTful-API.git",
    },
    {
      id: 5,
      src: authentication,
      href: "https://github.com/yabetsTemesgen/user-authentication-jwt.git",
    },
    {
      id: 6,
      src: vidly,
      href: "https://github.com/yabetsTemesgen/vidly.git",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-slate-900 to-blue-900 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="text-white mt-3 mb-3 w-fit px-6 py-3 flex items-center shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer"
                >
                  Code <FaGithub size={25} className="ml-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
