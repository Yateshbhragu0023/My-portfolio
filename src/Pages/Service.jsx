import React from 'react'
import brickBg from "../../src/assets/images/bricksBg.jpg"
import pimage1 from "../../src/assets/images/image.webp"
import pimage2 from "../../src/assets/images/image (1).webp"
import pimage3 from "../../src/assets/images/image (2).webp"
import { motion } from "framer-motion"
import { IoRocketOutline } from 'react-icons/io5'


const limage2 = {
  backgroundImage: `url(${brickBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const projects = [
  {
    id: 1,
    image: pimage1,
    name: "restaurent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur."
  },
  {
    id: 2,
    image: pimage2,
    name: "Space",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur."
  },
  {
    id: 3,
    image: pimage3,
    name: "car dealer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur."
  },
  {
    id: 4,
    image: pimage2,
    name: "Bakery",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur."
  },
  {
    id: 5,
    image: pimage1,
    name: "caffe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur."
  },

]

export default function Service() {
  return (
    <div style={limage2}>
      <div className=' bg-gradient-to-b from-blue-800/30 to-black/90 md:px-24 place-items-center md:h-[750px] md:py-20 py-12'>
        <div className="container md:flex justify-between gap-10 ">
          {/* left text sectionn statr */}
          <div className='space-y-8 md:px-0 px-5 md:mt-0 mt-3 w-[100%] md:place-items-start md:text-start text-center place-items-center md:w-[50%] content-center'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className='text-white text-5xl leading-tight font-bold'>Services</motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className='text-gray-400 leading-tight '>Your one-stop solution for stunning, scalable, and strategic website, From concept to launch. I create websites that are fast, responsive, and conversion-focused</motion.p>
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
          {/* right service section start */}\
          <div className='md:w-[50%] w-[100%] md:mt-0 mt-10  relative  md:flex-col md:space-y-0 space-y-8 md:flex gap-10 place-items-center rounded-xl'>
            <div className='w-[2px] hidden md:block h-[550px] bg-white '></div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
              className='rounded-xl md:absolute left-5 md:w-[40%] sm:w-[100%] w-[90%] p-5 bg-black/50 space-y-4' >
              <h1 className='p-2 rounded-full text-2xl bg-gray-600/55 text-blue-600 w-10'><IoRocketOutline /></h1>
              <h1 className='text-white text-3xl leading-tight font-bold'>Website design</h1>
              <p className='text-gray-400'>Designing impactful web experiences that drive engagement and business success.</p>
            </motion.div>
            <div className='h-[3px] hidden md:block absolute top-8 bg-white w-9 left-[43.5%]' ></div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
              className='rounded-xl md:absolute md:w-[40%] sm:w-[100%] w-[90%] top-32 right-2 p-5 bg-black/50 space-y-4' >
              <h1 className='p-2 rounded-full text-2xl bg-gray-600/55 text-blue-600 w-10'><IoRocketOutline /></h1>
              <h1 className='text-white text-2xl leading-tight font-bold'>Website development</h1>
              <p className='text-gray-400'>Developing fast, secure websites  with clean code and modern that perform Easily across all devices .</p>
            </motion.div>
            <div className='h-[3px] hidden md:block absolute top-40 bg-white w-12 left-[49.9%]' ></div>
            <div className='h-[3px] hidden md:block absolute top-96 bg-white w-9 left-[43.5%]' ></div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
              className='rounded-xl md:absolute md:w-[40%] sm:w-[100%] w-[90%] top-80 left-5 p-5 bg-black/50 space-y-4' >
              <h1 className='p-2 rounded-full text-2xl bg-gray-600/55 text-blue-600 w-10'><IoRocketOutline /></h1>
              <h1 className='text-white text-2xl leading-tight font-bold'>App development</h1>
              <p className='text-gray-400'>Developing engage, inspire, convert , high-performing mobile apps with modern technology.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
