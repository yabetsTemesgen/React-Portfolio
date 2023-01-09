import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, My name is Yabets Temesgen. I'm a very ambitious full stack
          developer looking for a role in an established IT company with the
          opportunity to work with the latest technologies on challenging and
          diverse projects.
        </p>

        <br />

        <p className="text-xl">
          I am experienced working with the latest technologies. I am currently
          working on web applications using ReactJs, MongoDB, Express JS,
          NodeJs, BootStrap, Tailwindcss and REST APIs. I am always eager to
          learn new things and improve my skills.
        </p>
        <br />
        <p className="text-xl">
          I offer strong Front-End and Back-End skills. I am able to work in
          fast paced environment, check out my resume and feel free to contact
          me.
        </p>
      </div>
    </div>
  );
};

export default About;
