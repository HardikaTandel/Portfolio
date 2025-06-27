import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Projects", to: "projects" },
    { id: 3, text: "Services", to: "tools" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        <div className="text-xl lg:text-2xl font-bond flex items-center gap-1">
          <span className="text-white">H</span>
          <span className="text-purple-500">T</span>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white ">
            {items.map(({ id, text, to }) => (
              <li key={id} className="hover:text-purple-400 cursor-pointer">
                <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/resume.pdf" // ✅ Path to your CV
          target="_blank" // ✅ Opens in a new tab
          rel="noopener noreferrer" // ✅ Security best practice
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-300 text-white px-4 py-2 rounded-full"
        >
          View Resume
        </a>
      </motion.div>

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => {
              setMenu((prev) => !prev);
            }}
            className="bg-white text-black fixed z-10 w-2/3 h-full "
          >
            <div className="px-7 py-6">
              {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
            </div>

            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="hover:text-purple-500 cursor-pointer"
                    >
                      <Link to={to} smooth={true} duration={500} offset={-70}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-300 text-white px-4 py-2 rounded-full"
                >
                  View Resume
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">H </span>
          <span className="text-purple-500">T</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
