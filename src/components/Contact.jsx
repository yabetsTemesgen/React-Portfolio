import React from "react";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import firebase from "./FirebaseConfig";
import { toast } from "react-toastify";
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
      style:
        " duration-300 hover: rounded hover:bg-gradient-to-tr from-yellow-400 via-pink-400 to-fuchsia-700",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/yabets-temesgen-21384b214/",
      style: " duration-300 hover:bg-gradient-to-tr from-blue-400 to-blue-700",
    },
    {
      id: 3,
      child: (
        <>
          <FaTelegram size={20} />
        </>
      ),
      href: "https://t.me/yab_25",
      style:
        " duration-300 hover: rounded hover:bg-gradient-to-tr from-blue-400 to-blue-700",
    },
  ];

  const contactForm = firebase.database().ref("contactMessages");
  const contactFormSubmit = () => {
    var name = getElementVal("nameField");
    var email = getElementVal("emailField");
    var msg = getElementVal("msgContent");
    saveMessages(name, email, msg);
    if (name === "" || email === "" || msg === "") {
      toast.error("Please fill out all the fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (saveMessages) {
        toast.success("Your message is sent successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Error occured while sending message", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const saveMessages = (name, email, msg) => {
    const newContactFormRef = contactForm.push();
    newContactFormRef.set({
      name: name,
      email: email,
      msg: msg,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

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
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="name"
              id="nameField"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="emailField"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              id="msgContent"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              onClick={contactFormSubmit}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              send
            </button>
          </form>
        </div>
      </div>
      <p className="text-center">Developed by Yabets Temesgen</p>
      <h3 className="text-center mb-1">Copyright © 2023 YT</h3>
      <div className="">
        <ul className="flex justify-center">
          {links.map(({ id, child, href, style }) => (
            <li key={id} className="px-2 ">
              <a
                href={href}
                className={"flex" + style}
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
