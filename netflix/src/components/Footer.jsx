import React from 'react';
import { Link } from "react-router-dom";
import youtube_icon from '../assets/youtube_icon.png';
import instagram_icon from '../assets/instagram_icon.png';
import twitter_icon from '../assets/twitter_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
const Footer = () => {
    return (
        <div className='Footer h-[50vh] w-full  pt-5'>


            <div className="social-icons flex gap-5 h-[30px] pl-50 mb-10 cursor-pointer"  >
                <img src={youtube_icon} alt="yt" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="insta" />
                <img src={facebook_icon} alt="fb" />


            </div>

            <Link to={'/Under'} className='grid grid-cols-3 gap-8 px-5 pl-50 mb-5 cursor-pointer '>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Card</li>
                <li>Media Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notice</li>
                <li>Cookies Preferances</li>
                <li>Contact Us</li>



            </Link>


            <p className='copywrite text  inline  pl-100 pt-20'> © 2025 netflix. All rights reserved. For educational purposes only.
            </p>



        </div >
    )
}


export default Footer;