import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

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

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className="row__poster" 
                    src={`${baseURL}${movie.poster_path}`}
                    alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
