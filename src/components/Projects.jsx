import React from "react";
import ToolsAndTech from "./ToolsAndTech";
import Experience from "./Experience";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png";
import { motion } from "framer-motion";

const Projects = () => {
  const openProjectSite = (link) => {
    window.open(link, "_blank");
  };
  
  const projects = [
    {
      id: 1,
      title: "NewsHunt",
      description:(
      <span>
      Developed a news app delivering category-wise updates (Politics, Tech, Sports) with text-to-speech and full-article navigation. Enhanced UI, added backend for saving favorites, and implemented NER for intelligent content tagging and recommendations. Currently improving NER accuracy.</span>
      ),
      image: project1,
      link: "https://github.com/HardikaTandel/news-app",
    },
    {
      id: 2,
      title: "TripCraft",
      description:
        "Built a web app that generates personalized travel itineraries based on destination, budget, and duration using React, Firebase, and Google Places API. Features include Google login, day-wise plans with photos, and PDF/email itinerary sharing.",
      image: project2,
      link: "https://ai-travel-planner-pi.vercel.app/",
    },
    {
      id:3,
      title: "Weather App",
      description :"Engineered a ReactJS-based weather dashboard using OpenWeather API for real-time updates and 5-day forecasts. Integrated city search, geolocation detection, and condition-based icons within a sleek, responsive UI for an engaging user experience.",
    image: project3,
    link: "https://forecastpage.netlify.app/"
    }
  
  ];

  return (
    <div  id='projects' className="py-3">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-white font-bold underline text-center"
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-10 text-gray-400 text-center  mt-6"
        >
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-5">
          {projects.map((project) => (
            <motion.div
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
                <p className="text-white sm:text-slate-300 text-base sm:text-lg leading-relaxed mb-4">{project.description}</p>
          
                <button className="border-2 border-purple-500 bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700 px-4 py-2 rounded-full transition-colors duration-200 font-medium shadow-lg mobile:bg-purple-500 mobile:text-white"
                  onClick={() => openProjectSite(project.link)}>View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Experience />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <ToolsAndTech />
      </motion.div>
    </div>
  );
};

export default Projects;
