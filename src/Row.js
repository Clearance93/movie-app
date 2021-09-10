import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import YouTube from 'react-youtube';
import  movieTrailer  from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        //if [], run once when the row loads, and don't run again 
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData(); 

    }, [fetchUrl]);
    console.table(movies)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
           // https://developers.google.com/youtube/player_parameters
           autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((err) => console.error(err))
        }
    } 

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    // key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
