import React, { useEffect, useState } from 'react'
import './banner.css';
import axios from 'axios'
import requests from '../utills/request';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await axios.get(requests.fetchTrending)
        const result = res.data.results;
        setMovie(result[Math.floor(Math.random() * result.length)])
      }
      catch (err) {
        console.log(error)
      }
    }
    fetchUrl();
  }, [])

  console.log(movie)
  console.log(movie.backdrop_path || movie.poster_path)
  return (
    <div style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      height: `90vh`
    }} className='banner'>
      <div className='banner-content'>

        <h2 className='banner-name'>{movie?.title || movie?.name}</h2>

        <button className='banner-play'>
          Play
        </button>
        <button className='banner-list'>
          My List
        </button>
        <p>{movie?.overview?.substr(0, 150)}</p>

      </div>

    </div>
  )
}

export default Banner
