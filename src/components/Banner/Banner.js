import React, { useEffect, useState } from "react"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            const randomIndex = Math.floor(Math.random() * 20);
            console.log(response.data.results[0])
            setMovie(response.data.results[randomIndex])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className="banner" >
            <div className="content" >
                <h1 className="title"> {movie ? movie.original_title : ""} </h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description"> {movie ? movie.overview : ""} </h1>
            </div>
            <div className="fade-bottom">

            </div>
        </div>
    )
}

export default Banner  