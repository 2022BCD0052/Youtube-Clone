import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import './CSS/Sidebar.css'

const sidebarItem =[
    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },

    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },

    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },


    {
        icons: <IoMdHome className="sidebar_icon  size-30px"/>,
        title : "Home"
    },
    {
        icons: <SiYoutubeshorts className="sidebar_icon size=30px"/>,
        title : "Shorts"
    },
    {
        icons: <MdSubscriptions className="sidebar_icon size=30px"/>,
        title : "Subscription"
    },
 
]

const Sidebar = () => {
    const open = false;
    return (
        <>

            <div className='Sidebar relative border  border-none h-[calc(100vh-00rem)] my-3 overflow-y-scroll scrollbar-thin  mt-2 ml-4'>

              {/* map through the array of objects to create each item in the list */}
               {sidebarItem.map((item, index) => {
                return (
                    <div key={index} className='flex gap-4 my-2 px-3 py-1'>
                        {item.icons}
                        <p className={`ml-3 ${open ? "" :"hidden"}`}>{item.title}</p>
                    </div>
                );
            })
            
            }
            
</div>
           
        </>
    )
}

export default Sidebar 