import React from 'react'
import Banner from '../components/Banner'
import PlayingMovies from '../sections/PlayingMovies'
import TrendingMovies from '../sections/TrendingMovies'
import TvShows from '../sections/TvShows'

const Home = () => {
  return (
    <>
      <Banner />
      <PlayingMovies />
      <TrendingMovies />
      <TvShows />
    </>
  )
}

export default Home
