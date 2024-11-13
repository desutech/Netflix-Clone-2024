import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../utills/request'
import './row.css'

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.link).then((res) => {
      setMovies(res.data.results)
    })
  }, [])


  const isSmall = false;
  return (
    <div className='row-outer-countainer'>
      <h3>{props.title}</h3>
      <div className="row-container">
        {
          movies?.map((movie, index) => {
            return <div key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" />
            </div>
          })
        }</div>
    </div>
  )
}

export default Row;
