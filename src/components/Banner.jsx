import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { useGlobalState } from '../context/movieContext'
const Banner = () => {
  const { topRatedMovie, getImage } = useGlobalState()
  return (
    <>
      <section className='slider-container'>
        <Carousel
          showStatus={false}
          autoPlay={true}
          swipeable={true}
          infiniteLoop={true}
          showThumbs={false}
          showArrows={false}
        >
          {topRatedMovie.map((movie) => {
            const { backdrop_path, title, overview } = movie
            return (
              <div key={movie.id} className='slider-item'>
                <img src={getImage(backdrop_path, 1280)} alt={title} />
                <div className='movie-content'>
                  <div className='context-wrapper'>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <h4 className='category'>Comidy / Horror / Thriller</h4>
                    <button className='btn play'>Play Trailer</button>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
      </section>
    </>
  )
}

export default Banner
