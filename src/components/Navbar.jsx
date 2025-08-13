import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Projects", to: "projects" },
    { id: 3, text: "Services", to: "tools" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <div>
      {/* Desktop Menu */}
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
              <li key={id} className="text-white hover:text-purple-400 cursor-pointer transition-colors">
                <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-300 active:bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          View Resume
        </a>
      </motion.div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex justify-between items-center py-6 px-4">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-white">H</span>
            <span className="text-purple-500">T</span>
          </div>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="text-white p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setMenu(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="w-2/3 h-full bg-white text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <ul className="space-y-6 text-black text-lg mt-8">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="text-black hover:text-purple-500 cursor-pointer transition-colors"
                    >
                      <Link 
                        to={to} 
                        smooth={true} 
                        duration={500} 
                        offset={-70} 
                        onClick={() => setMenu(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 bg-purple-500 hover:bg-purple-300 active:bg-purple-600 text-white px-4 py-2 rounded-full text-center shadow-lg"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
