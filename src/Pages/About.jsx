import React from 'react'
import {motion} from "framer-motion"
import myimage from "../../src/assets/images/me.jpeg"


export default function About() {
  return (
    <div>
      <div className='bg-black/100 place-items-center md:px-24 px-4 py-28 shadow-2xl'>
        <div className='text-white text-center space-y-2'>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
            className='text-3xl font-bold uppercase'>About me</motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1.2 }}
          >Hi my self Yatesh Th, Full stack developer</motion.p>
        </div>
        <div className="container mt-20 md:flex justify-between gap-10 bg-gradient-to-b from-blue-700 to-black/50 rounded-3xl md:px-16 md:py-6 py-12">

          {/* left imag section  */}
          <div className='p-6  '>
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
              src={myimage} alt="" className='rounded-full md:h-[90%]' />
          </div>
          {/* right text section  */}
          <div className='space-y-8 md:px-0 px-5 md:mt-0 mt-3  content-center'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className='text-white text-4xl leading-tight font-bold'>I am a Full stack Web developer</motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className='text-gray-400  '>"A self-taught web designer from Rajasthan, I turn ideas into interactive digital stories.help brands stand out online and grow through powerful digital experiences."</motion.p>
            <div className='flex md:block ' >
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.4 }} className='bg-gradient-to-r  from-blue-700 text-white to-blue-700/50 rounded-md font-semibold px-4 md:px-6 py-2 hover:blue-shadow duration-200 '> Know More</motion.button>
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.4 }}
                className=' border ml-4 border-gray-300 text-white rounded-md font-semibold px-7 py-2  '> Download resume</motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
