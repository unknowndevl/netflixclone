import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import search from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_img from '../assets/profile_img.png';
import caret_icon from '../assets/caret_icon.svg';
import { logout } from '../firebase';
// import Under from '../components/under';

const Navbar = () => {
    return (
        <div id='Navbar' className=' w-screen h-22 px-[4%] py-5 flex justify-between fixed text-[14px] z-2 text-[#e5e5e5] bg-[#18070748]'>

            <div id="Navbar-left" className="flex items-center gap[50px] ">

                <img src={logo} alt="netflix-logo" className='w-[90px]  inline-block m-6' />
                <Link to={'/Under'} className='flex list-none gap-5 cursor-pointer font-serif tracking-[0.1em] '>
                    <li>Home</li>
                    <li>Tv-Shows</li>
                    <li> Movies</li>
                    <li>NewlyAdded</li>
                    <li>MyList</li>
                    <li>Browse by Language</li>
                </Link>
            </div>
            <div id="Navbar-right" className="flex gap-5 items-center cursor-pointer">
                <img src={search} alt="" className='icons w-5 ' />
                <p className=''>Children</p>
                <img src={bell_icon} alt="" className='icons' />
                <div className=" group flex items-center  w-25 relative  cursor-pointer " >
                    <img src={profile_img} alt="" />
                    <img src={caret_icon} alt="" className='m-2' />
                    <div id='dropdown' className=" w-20 h-10 text-center pt-1.5 dropdown absolute top-full right-0  bg-[#eeeee72c]   rounded-[10px]  underline z-1 hidden group-hover:block">
                        <p className=' cursor-pointe text-blue-300   ' onClick={() => { logout() }}>Log-Out</p>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Navbar;