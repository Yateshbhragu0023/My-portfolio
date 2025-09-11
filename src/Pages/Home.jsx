import React, { useState } from 'react'
import wallimage from "../../src/assets/images/wall-backround.avif"
import meimage from "../../src/assets/images/me.jpeg"
import sms from "../../src/assets/images/sms-send.webp"
import brickBg from "../../src/assets/images/bricksBg.jpg"
import GrainBg from "../../src/assets/images/grains-bg.jpg"
import pimage1 from "../../src/assets/images/image.webp"
import pimage2 from "../../src/assets/images/image (1).webp"
import pimage3 from "../../src/assets/images/image (2).webp"
import { IoRocketOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed";
import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { GrMysql } from 'react-icons/gr'
import { MdOutlineHttps } from 'react-icons/md'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'



let limage = {
  backgroundImage: `url(${wallimage})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const limage2 = {
  backgroundImage: `url(${brickBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
}
const Grainimage2 = {
  backgroundImage: `url(${GrainBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const projects = [
  {
    id: 1,
    image: pimage1,
    name: "restaurent",
    text: "this is an a restaurent website , that i have build from a UP client."
  },
  {
    id: 2,
    image: pimage2,
    name: "Space",
    text: "There is an space space website that i have built for my better practice."
  },
  {
    id: 3,
    image: pimage3,
    name: "car dealer",
    text: "This a car dealer website that i have built for a delhi based Car dealer client."
  },
  {
    id: 4,
    image: pimage2,
    name: "Bakery",
    text: "There is an space space website that i have built for my better practice."
  },
  {
    id: 5,
    image: pimage1,
    name: "caffe",
    text: "this is an a restaurent website , that i have build from a UP client."
  },

]

const Frontendskill = [
  {
    id: 1,
    icons: <FaHtml5 className='mx-auto' />,
    name: "HTML",
    textcolor: "red"
  },
  {
    id: 2,
    icons: <FaCss3 className='mx-auto' />,
    name: "CSS",
    textcolor: "blue"
  },
  {
    id: 3,
    icons: <FaJsSquare className='mx-auto' />,
    name: "JS",
    textcolor: "yellow"
  },
  {
    id: 4,
    icons: <FaReact className='mx-auto' />,
    name: "React",
    textcolor: "teal"
  },
  {
    id: 5,
    icons: <FaBootstrap className='mx-auto' />,
    name: "HTML",
    textcolor: "purple"
  }
]

const Backendskill = [
  {
    id: 1,
    icons: <SiExpress className='mx-auto' />,
    name: "Express",
    textcolor: "yellow"
  },
  {
    id: 2,
    icons: <FaNodeJs className='mx-auto' />,
    name: "Node.js",
    textcolor: "green"
  },
  {
    id: 3,
    icons: <DiMongodb className='mx-auto' />,
    name: "MongoDB",
    textcolor: "yellow"
  },
  {
    id: 4,
    icons: <GrMysql className='mx-auto' />,
    name: "MYsql",
    textcolor: "orange"
  },
  {
    id: 5,
    icons: <MdOutlineHttps className='mx-auto' />,
    name: "Http",
    textcolor: "gray"
  }
]


export default function Home() {

  const [data, setdata] = useState()
  console.log(data)

  const Handlesubmit = (e) => {
    e.preventDefault()
    const formdata = {
      "name": e.target.name.value,
      "email": e.target.email.value,
      "message": e.target.message.value,
    }
    setdata(formdata)

    emailjs
      .sendForm('service_gygsj3j', 'template_8o00o12', e.target, {
        publicKey: 'VjaHF4AtQ9_KFAfj5',
      })
      .then(
        (succes) => {
          console.log('SUCCESS!');
          alert("email sent succesfully!")
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(" failed to set email sent !")

        },
      );

  }


  return (
    <section  >
      {/* hero section start */}
      <div style={limage} >
        <div className=' place-items-center bg-gradient-to-b from-red-400/0 to-black/100 shadow-black shadow-2xl' >
          <div className="container md:px-16 py-24 ">
            <div className='md:flex text-center md:text-start  justify-between gap-10'>
              {/* left text section */}
              <div className='text-white md:w-[50%] space-y-2 md:px-0 sm:px-0 px-3 place-items-center md:place-items-start    w-[100%] py-8'>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 1.5 }}
                  className='text-3xl'>Hello, I'm</motion.h1>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 2 }}
                  className='texter py-3 '>Yatesh BHragu</motion.h1>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1.2 }}
                  className='text-4xl font-bold pb-3'
                >
                  <ReactTyped strings={[" Full stack developer", "App developer", "UI/UX designer"]} typeSpeed={100} backSpeed={50} loop={true} />
                </motion.h1>
                < motion.p
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1.8 }}
                  transition={{ type: "spring", duration: 2.5 }} >Passionate web developer. I design and develop websites that convert visitors into customers. I turn your vision into a digital experience that works 24/7.</motion.p>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 2.8 }}
                  className='py-4'>
                  <button className='bg-gradient-to-r from-blue-700 to-blue-700/50 rounded-md font-semibold px-6 py-2 hover:blue-shadow duration-200 '>
                    Know More
                  </button>
                </motion.div>
                {/* experience */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 3 }}
                  className=' place-items-center border-blue-700 border-2 bg-gradient-to-b from-blue-700 to-blue-700/15  rounded-lg flex mt-8 justify-evenly py-2 md:w-[65%] w-[80%] text-center'>
                  <div>
                    <h1 className='font-bold text-xl'> 5+</h1>
                    <h1>Experience</h1>
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>199+</h1>
                    <h1>Projects</h1>
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>55+</h1>
                    <h1>Clients</h1>
                  </div>
                </motion.div>
              </div>
              {/* right image section */}
              <div className=' md:w-[50%] place-items-center mt-10 md:place-items-end'>
                <div className=' w-[85%] '>
                  <motion.img initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 2 }} src={meimage} className='rounded-full ' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* About sections start */}
      <div >
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
                src={meimage} alt="" className='rounded-full md:h-[90%]' />
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
                className='text-gray-400  '>"A self-taught web designer from Rajasthan, I turn ideas into interactive digital stories.help brands stand out online and grow through powerful digital experiences.</motion.p>
              <div className='flex md:block ' >
                <Link to={'/about'} >
                  <motion.button
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.4 }} className='bg-gradient-to-r  from-blue-700 text-white to-blue-700/50 rounded-md font-semibold px-4 md:px-6 py-2 hover:blue-shadow duration-200 '> Know More</motion.button>
                </Link>
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
      {/* About sections end */}

      {/* skills section start  */}
      <div className='bg-gradient-to-br from-blue-700/85 to-black place-items-center'>
        <div className="container p-3 sm:p-4  sm:py-14   py-12 md:p-24 ">
          <div className='text-white text-center '>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
              className='text-3xl font-bold uppercase'>My Skills</motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1.2 }}
            >Know About My Skills, which skill i have learn </motion.p>

            <div className='border-2 md:flex  justify-between  gap-8 hover:blue-shadow border-blue-700 md:p-10 sm:p-5 p-2 rounded-2xl mt-10 transition-all duration-200 ' >
              <div className='text-center md:w-[50%] sm:w-[100%] border  border-white p-4 rounded-md '>
                <h1 className='text-xl font-bold uppercase'>Frontend Skills</h1>
                <ul className='flex justify-between  mt-4'>
                  {
                    Frontendskill.map(
                      (data) => {
                        return (
                          <li className={`rounded-md border border-${data.textcolor}-400 p-3 text-center text-${data.textcolor}-500 font-semibold text-x`}>
                            <h1 className='mx-auto' >{data.icons}</h1>
                            {data.name}
                          </li>
                        )
                      }
                    )
                  }

                </ul>
              </div>
              <div className='text-center md:w-[50%] sm:w-[100%] mt-6 md:mt-0 border border-white p-4 rounded-md'>
                <h1 className='text-xl font-bold uppercase'>Backend Skills</h1>
                <ul className='flex-wrap sm:flex md:flex md:space-y-0 space-y-4 justify-between  mt-4'>
                  {
                    Backendskill.map(
                      (data) => {
                        return (
                          <li className={`rounded-md border border-${data.textcolor}-400 p-3 text-center text-${data.textcolor}-500 font-semibold text-x`}>
                            <h1 className='mx-auto' >{data.icons}</h1>
                            {data.name}
                          </li>
                        )
                      }
                    )
                  }

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* skills section end */}

      {/* service section start */}
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
      {/* service section end */}

      {/* project section start  */}
      <div className='bg-black md:p-24 sm:p-10  sm:py-16 p-4 py-16'>
        <div className="container relative text-white text-center ">
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.2 }}
            transition={{ type: "spring", duration: 0.8 }}
            className='font-bold md:text-8xl text-4xl opacity-10 uppercase'>Projects</motion.h1>
          <h1 className='font-bold md:text-4xl sm:text-2xl text-xl absolute md:top-9 sm:top-1 top-2 md:left-[43%] sm:left-[43%] left-[35%] uppercase'>Projects</h1>
          {/* projects */}
          <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-10 sm:mt-12 my-16 gap-8'>
            {
              projects.map(
                (data) => {
                  return (
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.4 }}
                      className='rounded-xl border-blue-700 border-2 p-4 text-start space-y-4 hover:blue-shadow hover:scale-110 transition-all duration-300' key={data.id}>
                      <img src={data.image} alt="" />
                      <h1>{data.name}</h1>
                      <p>{data.text} </p>
                      <div className='flex py-2  hover:block'>
                        <button
                          className='bg-gradient-to-r  from-blue-700 text-white to-blue-700/50 rounded-md font-semibold  px-4 md:px-4 py-2 hover:blue-shadow duration-200 '> Live view</button>
                        <button
                          className=' border ml-4 border-gray-300 text-white rounded-md font-semibold md:px-7 sm:px-2 px-4 py-2  '>View Github Code</button>
                      </div>
                    </motion.div>
                  )
                }
              )
            }

          </div>
        </div>
      </div>
      {/* project section end  */}

      {/* contact form start */}
      <div className='bg-black place-items-center p-4 md:p-24'>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }}
          className='md:text-3xl sm:text-3xl text-2xl text-white font-bold uppercase'>Get in Touch</motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1.2 }}
          className='text-white text-center'
        >if you Want to Work with me, Then you can Fill up form </motion.p>

        <div className="container grid md:grid-cols-2 grid-cols-1 mt-12">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.4 }}
            className=' bg-gradient-to-b from-blue-600 to-blue-900/50 md:p-8 sm:p-8 p-4 rounded-lg sm:w-[100%] md:w-[90%]'>
            <form action="" className='space-y-5' onSubmit={Handlesubmit} >
              <h1 className='font-semibold text-white text-2xl'>Get in Touch</h1>
              {/* Name */}
              <div>
                <label className="block text-black mb-1">Name</label>
                <input
                  type="text"
                  name='name'
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-black mb-1">Email</label>
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-black mb-1">Message</label>
                <textarea
                  rows="4"
                  name='message'
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className='bg-gradient-to-r  from-blue-700 text-white to-blue-700/50 rounded-md font-semibold px-4 md:px-4 py-2 hover:blue-shadow duration-200 ' >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className='place-items-center content-center md:py-0 py-20 '>
            <img src={sms} className='w-[60%]' alt="" />
          </motion.div>
        </div>
      </div>
      {/* contact form start */}

    </section >
  )
}
