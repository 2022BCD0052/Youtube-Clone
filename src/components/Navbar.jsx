import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from './../assets/Logo/logo.png';
import Profile from "./../assets/Profile_image/profile.jpg"
import { IoIosNotifications } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar"
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { useState } from 'react';




export const Navbar = () => {
   
    const  [open, setopen] = React.useState(true);

    const TogleHandler =() =>{};
    
    return (
        <div >
            <div className='flex w-[100%] fixed px-7 py-1 pr-9 items-center top-0 justify-between z-10 text-black bg-green-100'>
                <div className='flex  items-center gap-3 cursor-pointer'>
                    <GiHamburgerMenu width={"30px"} onClick={TogleHandler} />
                    <img className='px-4' width={"115px"} src={logo} alt="yt_logo" />
                </div>


                <div className='flex items-center mx-auto mx-w-md  w-[50%] gap-3 '>
                    <div className=' border-gray-400 round-true flex w-full' >
                        <input type="text" className="w-full py-2 px-4 border border-gray-400  rounded-l-full focus:outline-none focus:border-blue-500 " placeholder="Search..." />

                        <button className='py-2 border border-gray-400 rounded-r-full px-4'><CiSearch size={"24px"} />
                        </button>
                    </div>
                    <div className='border border-gray-400 bg-gray-300 rounded-full p-2'>
                        <HiMicrophone size={"25px"} />
                    </div>

                </div>


                <div className='flex items-center justify-between  gap-9 cursor-pointer px-1'>

                    <IoIosNotifications className='cursor-pointer' size={"24px"} />
                    <CiVideoOn />

                    <Avatar src={Profile} size={35} round="100%" />

                </div>
            </div>
        </div>
    )
}
