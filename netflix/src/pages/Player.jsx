import React, { useEffect, useState } from 'react';

import back_arrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQ5ZDU4YzhmMmYwNGY1NTIyNDU5YTM1NjMwMThjMyIsIm5iZiI6MTc2NDYxNDI5MC4wMTMsInN1YiI6IjY5MmRlMDkyZWQ3MjUzNjI0ZjI2ZWU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1W7MtkGRZDgzmLfDihAOifYvUHJA6iWwPPlHXcWCCc4'
        }
    };
    useEffect(
        () => {

            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
                .then(res => res.json())
                .then(res => setApiData(res.results[0]))
                .catch(err => console.error(err));



        }, []
    )

    return (
        <div className='Player flex h-screen w-screen flex-col' >
            <img className='h-10 w-10' src={back_arrow} alt="" onClick={() => { navigate(-1) }} />

            <iframe width="560" height="315" className='h-100 w-250 pl-20 mt-8' src={`https://www.youtube.com/embed/${apiData.key}`} title="YouTube video player" frameborder="0" allow="accelerometer, autoplay , picture-in-picture, web-share" allowfullscreen></iframe>



            <div className="playerinfo flex items-center gap-90 w-[90%] pl-20 pt-5">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div >
    )
}

export default Player;