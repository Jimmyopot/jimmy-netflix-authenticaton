import React, { useState, useEffect } from 'react';
import requests from '../requests';
import axios from '../axios';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? 
            string.substr(0, n-1) + '...' : string;
    }

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ultricies tellus, sit amet euismod tortor. 
                    Nullam gravida orci consectetur, ornare tortor a, consequat nulla. Sed molestie purus non ultrices consequat. 
                    Cras vel feugiat sem. Maecenas ut est vel libero mollis finibus sed non dolor. Phasellus rhoncus quis orci eget 
                    tristique. Mauris ut tortor arcu. Ut fermentum neque eu arcu blandit, tincidunt interdum justo feugiat. In id 
                    augue at lectus vehicula auctor a ut leo. Praesent porta mi sem, vel malesuada nisl gravida non.`, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
