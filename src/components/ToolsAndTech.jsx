import React from 'react'
import { motion } from 'framer-motion'

const ToolsAndTech = () => {

    const techtools=[
        "C++",
        "JavaScript",
        "ReactJS",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Github",
        "Python",
        "Numpy",
        "Pandas",
        "Microsoft Office",
        "Figma",
        "MongoDB",
        "SQL",
    ];

    const duplicatedTechTools = [...techtools, ...techtools];

const scrollVarients1 ={
    animate:{
        x:[0, -2000],
        transition: {
            x:{
                repeat:Infinity,
                repeatType:"loop",
                duration:30,
                ease: "linear",
            },
        }
    }
}
const scrollVarients2 ={
    animate:{
        x:[-2000, 0],
        transition: {
            x:{
                repeat:Infinity,
                repeatType:"loop",
                duration:30,
                ease: "linear",
            },
        }
    }
}

  return (
    
    <div id='tools' className='text-white py-16'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>Tools & Technologies</h2>
            <div className='overflow-hidden w-full relative'>
                <motion.div variants={scrollVarients1}
                animate="animate"
                className='whitespace-nowrap flex space-x-10'>
                     {duplicatedTechTools.map((techtool, index)=>(
                      <div key={index} className='text-lg bg-gray-700 sm:bg-gray-800 px-6 py-3 inline-block rounded-4xl shadow-lg border border-gray-600'>
                        {techtool}
                      </div>
                     ))}
                </motion.div>
            </div>
            <div className='overflow-hidden relative w-full mt-5'>
                <motion.div 
                variants={scrollVarients2}
                animate="animate"className='whitespace-nowrap flex space-x-10'>
                {duplicatedTechTools.map((techtool, index)=>(
                      <div key={index}
                      className='text-lg bg-gray-700 sm:bg-gray-800 px-6 py-3 inline-block rounded-4xl shadow-lg border border-gray-600'>
                        {techtool}
                      </div>
                     ))}
                </motion.div>
            </div>
        </div>
    </div>
    
  )
}

export default ToolsAndTech