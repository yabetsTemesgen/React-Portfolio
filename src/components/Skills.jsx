import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import mysql from "../assets/mysql.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node Js",
      style: "shadow-lime-500",
    },
    {
      id: 6,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-700",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-700",
    },
    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 12,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-blue-900 to-slate-900 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">check out my skill set</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
