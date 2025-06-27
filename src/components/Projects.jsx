import React, { useRef } from "react";
import ToolsAndTech from "./ToolsAndTech";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });
  const openProjectSite = (link) => {
    window.open(link, "_blank");
  };
  
  const projects = [
    {
      id: 1,
      title: "Personal daily news app",
      description:
        "Daily News App delivers real-time updates across genres like Politics, Tech, and Sports. With has the feature of reading the news headlines out loud, users can listen to news hands-free while multitasking. Also direct to main page if what detailed information.",
      image: project1,
      link: "https://dailynewapp.netlify.app/",
    },
    {
      id: 2,
      title: "AI travel planner",
      description:
        "A smart, AI-powered travel planning web app that generates personalized itineraries based on user preferences like destination, budget, and trip duration. Built with React, Firebase, and the Google Places API, it allows users to view day-wise plans, explore places with photos, and save trips to their account via Google login.",
      image: project2,
      link: "https://ai-travel-planner-pi.vercel.app/",
    },
  
  ];

  return (
    <div  id='projects' className="py-3">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-white font-bold underline text-center"
        >
          My Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-10 text-gray-400 text-center  mt-6"
        >{/** 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          reprehenderit. Eum repudiandae inventore aperiam quae dolorum placeat
          autem soluta et! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius, delectus!*/}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-5">
          {projects.map((project) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: project.id * 0.2, duration: 0.5 }}
              key={project.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} className="w-full h-48 " />
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
          
                <button className="border-2 border-purple-700 text-purple-700 px-4 py-1 rounded-full hover:text-white hover:bg-purple-700 transition"
                  onClick={() => openProjectSite(project.link)}>View Site
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <ToolsAndTech />
      </motion.div>
    </div>
  );
};

export default Projects;
