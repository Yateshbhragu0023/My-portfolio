import React, { useState } from 'react'
import { motion } from "framer-motion"
import sms from "../../src/assets/images/sms-send.webp"
import emailjs from '@emailjs/browser';


export default function Contact() {


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
      .sendForm('service_gygsj3j', 'template_8o00o12', e.target , {
        publicKey: 'VjaHF4AtQ9_KFAfj5',
      })
      .then(
        (succes) => {
          console.log('SUCCESS!');
          alert("email sent succesfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(" failed to set email sent !")

        },
      );

  }

  return (
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
          <form action="" className='space-y-5' onSubmit={Handlesubmit}>
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
  )
}
