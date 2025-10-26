import React from "react";
import avatar from "../assets/main-image.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="about" className="text-white py-5">
      <motion.img
        initial={{ opacity: 0.3, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        src={avatar}
        className="mx-auto w-2/6 md:w-1/4 lg:w-1/5  "
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-2 mt-2"
        >
          {" "}
          Hardika Tandel
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-purple-500 text-3xl"
        >
          Web Developer & Data Enthusiast
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-white sm:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 mt-2 "
        >
          <p>
            Hi, I’m a B.Tech IT student at Bharati Vidyapeeth University, Pune,
            passionate about building impactful digital experiences through
            full-stack web development and data-driven insights. I love creating
            clean, responsive, and user-friendly interfaces using React.js,
            Tailwind CSS, and modern UI/UX design principles — while also
            exploring how data can make web applications smarter and more
            meaningful.
          </p>
          <p className="mt-3">
            Recently, I’ve been diving deeper into data analytics and machine
            learning — learning how to integrate intelligent features and data
            visualization into web apps to deliver more personalized and
            efficient user experiences. I’m always eager to learn, experiment,
            and bridge the gap between web development and data science to craft
            innovative, future-ready solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
