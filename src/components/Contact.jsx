import React, { useRef } from 'react'
import avatar from '../assets/main-contact.png'
import { motion } from 'motion/react'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const ref =useRef(null);

  return (
    <div  id='contact' className='container mx-auto text-center mb-10'>
      <motion.h2 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-4xl font-bold text-white mb-8'>Let's stay connected!</motion.h2>

      <div className='flex flex-col md:flex-row items-center justify-center gap-12'>

        <div className='flex justify-center items-center w-full md:w-1/3'>
          <motion.img src={avatar} 
               ref={ref}
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity:1, x: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ delay: 0.4, duration: 0.5 }} 
          className="w-52 h-52 object-cover rounded-full shadow-lg" />
        </div>

        {/* Contact Details */}
        <div className='w-full md:w-2/3 max-w-4xl px-4 sm:px-6 lg:px-12'>
          <div className='space-y-6 text-left'>

            <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }} className='flex items-center space-x-4'>
              <div className='bg-purple-500 p-4 rounded-full'>
                <FaPhone className='text-white w-6 h-6' />
              </div>
              <p className='text-lg font-medium text-white'>+91-9594376466</p>
            </motion.div>

            <motion.div
                 ref={ref}
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ delay: 0.4, duration: 0.5 }} 
            className='flex items-center space-x-4'>
              <div className='bg-purple-500 p-4 rounded-full'>
                <FaEnvelope className='text-white w-6 h-6' />
              </div>
              <p className='text-lg font-medium text-white'>tandelhardika@gmail.com</p>
            </motion.div>

            <motion.div 
                 ref={ref}
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ delay: 0.6, duration: 0.5 }} 
            className='flex items-center space-x-4'>
              <div className='bg-purple-500 p-4 rounded-full'>
                <a 
                  href="https://www.linkedin.com/in/hardika-tandel-8a83a924a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className='text-white w-6 h-6' />
                </a>
              </div>
              <p className='text-lg font-medium text-white'>
                <a 
                  href="https://www.linkedin.com/in/hardika-tandel-8a83a924a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Visit my LinkedIn
                </a>
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
