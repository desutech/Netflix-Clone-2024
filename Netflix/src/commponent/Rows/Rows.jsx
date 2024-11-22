import React from 'react'
import requests from '../utills/request'
import Row from '../Row/Row'
import './rows.css'

const Rows = () => {




  console.log(requests)
  return (
    <div className='rows_container'>

      <Row link={requests.fetchTopRatedMovies} title={'topRated'} />
      <Row link={requests.fetchActionMovies} title={'Action'} />
      <Row link={requests.fetchComedyMovies} title={'Action'} />
      <Row link={requests.fetchDocumentaries} title={'Action'} />
      <Row link={requests.fetchHorrorMovies} title={'Action'} />
      <Row link={requests.fetchNetflixOrginals} title={'Action'} />
      <Row link={requests.fetchRomanticMovies} title={'Action'} />
      <Row link={requests.fetchTvShows} title={'Action'} />
    </div>


  )
}

export default Rows
