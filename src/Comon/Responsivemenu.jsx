import React from 'react'
import { Link } from 'react-router-dom'

export default function Responsivemenu({ showmenu, Navlink }) {
    console.log(showmenu)
    return (
        <div className='md:hidden sm:block'>
            <div className={` ${showmenu ? "left-0" : "-left-[100%]"}
             fixed top-0 
              bg-black/90 w-[75%]
              text-white min-h-screen 
              pt-16 pl-10 z-[999]
               duration-500 font-bold  md:hidden rounded-r-xl shadow-md  `}>
                <ul className='text-xl text-start'>
                    {
                        Navlink.map(
                            (data) => {
                                return (
                                    <Link to={data.link} key={data.id}>
                                        <li className='py-6' >{data.name}</li>
                                    </Link>
                                )
                            }
                        )
                    }

                </ul>
                {/* menu footer section */}
                <div className='text-start font-normal pt-9'>
                    <p>
                        Made With 🩷 by Yatesh TH developer
                    </p>
                </div>
            </div>

        </div>
    )
}
