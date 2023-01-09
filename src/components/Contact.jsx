import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaInstagram size={20} />
        </>
      ),
      href: "https://www.instagram.com/yab_tem/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/yabets-temesgen-21384b214/",
    },
    {
      id: 3,
      child: (
        <>
          <FaTelegram size={20} />
        </>
      ),
      href: "https://t.me/yab_25",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Let's get in touch</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c45bdea6-8ca1-41a3-a00e-35d287025926"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              send
            </button>
          </form>
        </div>
      </div>
      <p className="text-center">Developed by Yabets Temesgen</p>
      <h3 className="text-center mb-1">Copyright © 2023 YT</h3>
      <div className="">
        <ul className="flex justify-center">
          {links.map(({ id, child, href, download }) => (
            <li key={id} className="px-2 ">
              <a
                href={href}
                className=""
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
