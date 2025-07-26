import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });

  const experiences = [
    {
      id: 1,
      title: "SDE Intern",
      company: "CDAC - Pune",
      duration: "May 2025 - Present",
      description: "Independently designed and developed the Calendar module for CDAC - Pune’s management app, handling both UI and backend while others worked on the other modules. Built intuitive scheduling and event features, integrating seamlessly with other modules. Used Figma, Tailwind CSS, Node.js, and MongoDB to deliver a secure, high-performance solution that improved workflow efficiency across the organization.",
      technologies: ["React", "MongoDB", "HTML5", "Git","Node.js","Express.js","Tailwind CSS","Figma"]
    },
 
    
  ];

  return (
    <div className="py-8">
      <motion.h3
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl text-white font-bold text-center mb-8"
      >
        Experience
      </motion.h3>
      <div className={`mx-5 ${experiences.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
        {experiences.map((experience) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: experience.id * 0.2, duration: 0.5 }}
            key={experience.id}
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-white text-xl font-semibold">
                  {experience.title}
                </h4>
                <span className="text-purple-400 text-sm font-medium">
                  {experience.duration}
                </span>
              </div>
              <h5 className="text-purple-300 text-lg font-medium mb-3">
                {experience.company}
              </h5>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 