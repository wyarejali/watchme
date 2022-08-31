import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'

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
            const { backdrop_path, title, overview, release_date } = movie
            return (
              <div
                key={movie.id}
                className='slider-item'
                style={{
                  backgroundImage: `url(${getImage(backdrop_path, 1280)})`,
                }}
              >
                <div className='movie-content'>
                  <div className='container'>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <h4>
                      Release Date: <span className='date'>{release_date}</span>
                    </h4>
                    <Link to={`/movie/${movie.id}`} className='btn'>
                      View Details
                    </Link>
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
