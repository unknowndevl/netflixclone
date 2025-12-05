import React from 'react';
import Navbar from '../components/Navbar';
import hero from '../assets/hero.jpg';
import playicon from '../assets/play_icon.png';
import infoicon from '../assets/info_icon.png';
import Titlecard from '../components/TitleCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='Home'>

            <Navbar />
            <div className=" heroimg  " >
                <img src={hero} alt="" className='h-screen w-screen items-center  ' />
                <div className='flex  gap-5 absolute bottom-30 left-35 '  >
                    <button className=' b1 flex items-center gap-2  h-11 w-32  rounded-[10px]  bg-[#ffffff] font-bold tracking-wide text-[17px] hover:bg-[#870808b6]  text-black '>
                        <img src={playicon} alt="play" className='h-4 w-4  ml-2' />watch now</button>
                    <button className=' b1 flex items-center gap-2  h-11 w-32 border rounded-[10px]  bg-[#f4f3f326] font-bold tracking-wide text-[17px] hover:bg-[#09010f77]   '>
                        <img src={infoicon} alt="play" className='h-5 w-5  ml-2' />more info</button>
                </div >
                <Titlecard />

            </div>
            <div className="morecards  h-[115vh]  ">
                <Titlecard title={"BlockBuster Movies"} category={"top_rated"} />
                <Titlecard title={"Only on Netflix"} category={"popular"} />
                <Titlecard title={"Picks for You"} category={"upcoming"} />
                <Titlecard title={"Newly Added"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home;