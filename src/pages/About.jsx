import React from 'react'
import AboutImage from '../assets/about-watch-me.jpg'

const About = () => {
  return (
    <section className='about-us'>
      <div className='container'>
        <div className='about'>
          <div className='about-img'>
            <img src={AboutImage} alt='About' />
          </div>
          <div className='about-content'>
            <h2>About Us</h2>
            <p>
              WatchMe is an online database on infromation to related moveis and
              telivision shows.
            </p>
            <p>
              Explore new Movie and TV Show Trailers as you stay updated on
              upcoming movies and TV Shows.
            </p>
            <h4>Features</h4>
            <p>
              The Movies, TV shows, People and News pages of WatchMe are
              accessible to all internet users.
            </p>
            <p>
              WatchMe allows users to browse through a number of available
              genres like; Action, Drama, Thriller, Comedy, Science Fiction,
              Horror, Mystery, Romance, Adventure, Animation and Crime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
