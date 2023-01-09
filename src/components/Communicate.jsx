import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaFilePdf } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Communicate = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Discord <FaDiscord size={30} />
        </>
      ),
      href: "https://discordapp.com/users/8544",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yabets-temesgen-21384b214/",
    },
    {
      id: 3,
      child: (
        <>
          Email <SiGmail size={30} />
        </>
      ),
      href: "yabtemesgen@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/yabetsTemesgen",
    },

    {
      id: 5,
      child: (
        <>
          Resume <FaFilePdf size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[32%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-slate-900 to-blue-800 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
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
  );
};

export default Communicate;
