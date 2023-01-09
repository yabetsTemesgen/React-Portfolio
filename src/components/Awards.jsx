import React from "react";
import reactcert from "../assets/certificates/reactcert.png";
import bootstrapcert from "../assets/certificates/bootstrapcert.png";
import nodecert from "../assets/certificates/nodecert.png";
import fullcert from "../assets/certificates/fullcert.png";
import { FaCertificate } from "react-icons/fa";
const Awards = () => {
  const portfolios = [
    {
      id: 1,
      src: reactcert,
      href: "https://coursera.org/verify/TGM7W28MJKAA",
    },
    {
      id: 2,
      src: bootstrapcert,
      href: "https://coursera.org/verify/YWTMRQN5ZUTZ",
    },
    {
      id: 3,
      src: nodecert,
      href: "https://coursera.org/verify/GELDEFMLNTCG",
    },
    {
      id: 4,
      src: fullcert,
      href: "https://coursera.org/verify/specialization/3M976HX78LZH",
    },
  ];

  return (
    <div
      name="awards"
      className="bg-gradient-to-b from-slate-900 to-blue-900 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Awards & certifications
          </p>
          <p className="py-6">Check out some of my achievements</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
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
                  View credential <FaCertificate size={25} className="ml-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
