import React from 'react'
import requests from '../utills/request'
import Row from '../Row/Row'
import './rows.css'

const Rows = () => {




  console.log(requests)
  return (
    <div className='rows_container'>

      <Row link={requests.fetchTopRatedMovies} title={'TopRatedMovies'} />
      <Row link={requests.fetchActionMovies} title={'ActionMovies'} />
      <Row link={requests.fetchComedyMovies} title={'ComedyMovies'} />
      <Row link={requests.fetchDocumentaries} title={'Documentaries'} />
      <Row link={requests.fetchHorrorMovies} title={'HorrorMovies'} />
      <Row link={requests.fetchNetflixOrginals} title={'NetflixOrginals'} />
      <Row link={requests.fetchRomanticMovies} title={'RomanticMovies'} />
      <Row link={requests.fetchTvShows} title={'TvShows'} />
    </div>


  )
}

export default Rows
