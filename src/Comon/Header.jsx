import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import Responsivemenu from './Responsivemenu';


export default function Header() {
  const [showmenu, setshowmenu] = useState(false)

  const togglemenu = ()=>{
    setshowmenu(!showmenu)
  }

  const location = useLocation()
 
  const pathname = location.pathname
  
  const Navlink = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "About",
      link: "/about"
    },
    {
      id: 3,
      name: "Services",
      link: "/service"
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact"
    }
  ]



  return (
    <nav className='text-center place-items-center bg-black py-4 sticky top-0 left-0 z-[999] shadow-lg text-white'>
      <div className="container md:px-16 px-4 sm:px-5">
        <div className='flex justify-between  '>
          {/* logo section */}
          <div>
            <Link to={"/"}>
              <h1 className='text-3xl font-semibold'> <span className='bg-blue-700 rounded-full px-3 font-bold' >P</span>ortfolio.</h1>
            </Link>
          </div>
          {/* Navlink section */}
          <div className=' hidden md:block'>
            <ul className='flex justify-between  gap-9 place-items-center text-center'>
              {
                Navlink.map(
                  (data) => {
                    const isActive = pathname === data.link
                    return (
                      <Link to={data.link} key={data.id} className={`${isActive ? "text-blue-700 text-xl  font-bold hover:text-white " : "" } inline-block text-lg py-1 px-4 hover:blue-shadow hover:rounded-sm hover:bg-blue-700 transition-all duration-500 hover:scale-110`}>
                        <li className='text-xl cursor-pointer '>{data.name}</li>
                      </Link>
                    )
                  }
                )
              }
              <li>
                <button className=' btn'>Get Resume</button>
              </li>
            </ul>

          </div>
          {/* mobile menu section */}
              <div className=' md:hidden '>
               <FaBars onClick={togglemenu} className='text-3xl' />
              </div>
          {/* mobile sidebar menu start */}
        </div>
         <Responsivemenu showmenu={showmenu} Navlink={Navlink} setshowmenu={setshowmenu}/>
      </div>
    </nav>
  )
}
