import React from 'react'
import avatar from '../assets/main-image.png'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div id='about' className='text-white py-5'>
      <motion.img 
      initial={{opacity:0.3, scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{
        delay:.5,
        duration:.5
      }}
      src={avatar} 
      className='mx-auto w-2/6 md:w-1/4 lg:w-1/5  '/>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration:0.5
      }}
      className='container mx-auto text-center'>
        <motion.h1 
        initial={{opacity:0,y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:1, duration:0.5}}
        className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4 mt-6'> Hardika Tandel</motion.h1>
        <motion.span 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:1.5, duration:0.5}}
        className='text-purple-500 text-3xl'>Web Developer</motion.span>
        <motion.p 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:2, duration:0.5}}
        className='text-gray-400 text-lg mb-8 mt-4 '>  
I am a B.Tech IT student at Bharati Vidyapeeth University, Pune, with a strong interest in full-stack web development and a particular passion for frontend technologies. While I have experience working across the stack, I excel in building responsive, user-friendly interfaces using React.js, Tailwind CSS, and modern UI/UX design principles. I enjoy translating ideas into visually appealing and functional web applications, and I’m continuously enhancing my skills to create seamless digital experiences.        </motion.p>
      </motion.div>
    </div>
  )
}

export default Hero