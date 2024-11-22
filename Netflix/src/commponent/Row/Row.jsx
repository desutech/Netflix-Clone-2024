import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../utills/request'
import './row.css';
import movieTra from 'movie-trailer';
import Youtube from 'react-youtube';

const Row = (props) => {
  const [id, setVideoId] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.link).then((res) => {
      setMovies(res.data.results)
    })
  }, [])


  let isSmall = false;

  function movieTrailer(title, name) {
    movieTra(title || name).then((res) => {
      const url = new URL(res);
      const urlParam = new URLSearchParams(url.search);
      const urlId = urlParam.get('v');
      setVideoId(urlId)
    })
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {

      autoplay: 1,
    }
  }

  return (
    <div className='row-outer-countainer' >
      <h3 className='image-title'>{props.title}</h3>
      <div className="row-container">
        {
          movies?.map((movie, index) => {
            isSmall = movie.backdrop_path ? true : false;

            return <div key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" style={{
                height: isSmall ? 'auto' : '17rem'
              }} onClick={() => {
                movieTrailer(movie.title, movie.name)
              }} />
            </div>
          })
        }</div>
      <div>
        {id && <Youtube videoId={id} opts={opts} />}
      </div>
    </div >
  )
}

export default Row;
