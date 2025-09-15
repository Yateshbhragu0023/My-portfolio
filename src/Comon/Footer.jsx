import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='bg-black md:px-24 sm:px-10 px-4 sm:place-items-center sm:text-center md:py-16 sm:py-8 py-6 '>
      <div className="container">
        <div className='rounded-xl border-2 md:flex justify-between border-blue-500 bg-blue-700/30 md:px-28 sm:px-10 px-4 py-14'>
          <div className='text-white space-y-2'>
            <h1 className='sm:text-3xl md:text-3xl text-2xl font-bold'>Yatesh TH Developer</h1>
            <h1 className='text-xl font-normal'>yatesh898@gmail.com</h1>
            <h1 className='md:text-xl sm:text-xl text-[16px] font-normal'>copyright © 2025 Yatesh TH developer</h1>
          </div>
          <div className='text-white md:mt-0 mt-6'>
            <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold'>Follow Us on</h1>
            <ul className='flex md:justify-between md:gap-0 sm:gap-6 gap-2 sm:place-content-center  text-4xl pt-7'>
              <li>
                <a href="https://www.instagram.com/yatesh.techhub/" target="_blank" >
                  <FaInstagram />
                </a>
              </li>
              <li><FaLinkedin /></li>
              <li><FaFacebook /></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
