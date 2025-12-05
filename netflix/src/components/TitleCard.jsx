import React, { useEffect, useRef, useState } from "react";

// import card_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";


const Titlecard = ({ title, category }) => {
    const [apiData, setApiData] = useState([])

    const cardsRef = useRef();
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQ5ZDU4YzhmMmYwNGY1NTIyNDU5YTM1NjMwMThjMyIsIm5iZiI6MTc2NDYxNDI5MC4wMTMsInN1YiI6IjY5MmRlMDkyZWQ3MjUzNjI0ZjI2ZWU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1W7MtkGRZDgzmLfDihAOifYvUHJA6iWwPPlHXcWCCc4",
        },
    };

    const handlewheel = (event) => {
        cardsRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
    };
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=5`,

            options
        )
            .then((res) => res.json())
            .then((res) => setApiData(res.results))
            .catch((err) => console.error(err));

        cardsRef.current.addEventListener("wheel", handlewheel);

    }, []);
    return (
        <div className="TitleCard  mb-2 pt-2  relative bottom-30">
            <h2 className=" pl-3 inline font-bold text-[20px]">
                {title ? title : "Popular on Netflix"}
            </h2>
            <div
                className="card_list   flex  overflow-y-auto gap-3 w-full   no-scrollbar"
                ref={cardsRef}
            >
                {(apiData?.length > 0) ?
                    apiData.map((card, index) => {
                        return (
                            <Link to={`Player/${card.id}`} className="card  shrink-0 overflow-hidden  " key={index}>
                                <img
                                    className=" carditem w-70 h-44 rounded-5px cursor-pointer  "
                                    src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}

                                    alt="image"
                                />
                                <p className=" relative bottom-10 truncate">{card.original_title}</p>
                            </Link>
                        );
                    }) : <p className=" pl-20 text-34 text-amber-300" >unable to fetch data tmdb api ban in india please use vpn🤦‍♀️ </p>}
            </div>
        </div>
    );
};

export default Titlecard;
