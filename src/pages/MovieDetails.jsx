import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
  AiFillPlayCircle,
  AiFillStar,
  AiOutlineDollar,
  AiOutlineFieldTime,
} from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { PlayerModal } from '../components'
import { useGlobalState } from '../context/movieContext'
import { formate } from '../features/formateNumber'

// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const baseUrl = `https://api.themoviedb.org/3/movie/`

const MovieDetails = () => {
  const page = useRef()
  const { getImage, isPlayerModalOpen, setIsPlayerModalOpen } = useGlobalState()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [movie, setMovie] = useState([])
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `${baseUrl}${id}${api_key}&language=en-US`
      const TrailerUrl = `${baseUrl}${id}/videos${api_key}`
      try {
        setIsLoading(true)
        await Promise.all([axios(url), axios(TrailerUrl)]).then((results) => {
          if (results) {
            const [movie, trailer] = results
            setMovie(movie.data)

            // Get the trailer id
            let videoData
            trailer.data.results.filter((video) => {
              if (video.official && video.type === 'Trailer') {
                videoData = video
              }
              return videoData
            })
            setVideoId(videoData?.key ? videoData.key : '')
            setIsLoading(false)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    getMovieDetails()

    page.current.scrollIntoView({ behavior: 'smooth' })
  }, [id])

  const handlePlayer = () => {
    setIsPlayerModalOpen((oldSate) => {
      return !oldSate
    })
  }

  if (isLoading) {
    return (
      <div
        style={{
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(180deg, var(--dark), transparent)',
          fontSize: '28px',
          color: 'white',
        }}
      >
        Loading...
      </div>
    )
  }

  return (
    <>
      {isPlayerModalOpen && <PlayerModal id={videoId} />}
      <div ref={page} className='movie-details'>
        <div
          className='backdrop_poster'
          style={{
            backgroundImage: `url(${
              movie.backdrop_path ? getImage(movie?.backdrop_path, 1280) : ''
            })`,
          }}
        ></div>
        <div className='container'>
          <div className='detail-header'>
            <div>
              <h1>{movie.title}</h1>
              <div className='categories'>
                {movie.genres?.map((genre, index) => (
                  <p key={index} className='genre'>
                    {genre.name}
                    <span> / </span>
                  </p>
                ))}
              </div>
              <div className='rating'>
                <AiFillStar color='#FFC000' size={'1.5em'} />{' '}
                {movie.vote_average?.toFixed(2)} / 10 <b>Total Vote:</b>{' '}
                {movie.vote_count}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className='icon-box'>
                <div className='icon'>
                  <BsCalendar2Date size={'1.4em'} />
                </div>
                <div className='box-content'>
                  <h4>RELEASE DATE</h4>
                  <p>{movie.release_date}</p>
                </div>
              </div>
              <div>
                <div className='icon-box'>
                  <div className='icon'>
                    <AiOutlineDollar size={'1.4em'} />
                  </div>
                  <div className='box-content'>
                    <h4>BUDGET</h4>
                    <p>
                      {movie.budget === 0 ? 'Unkown' : formate(movie.budget)}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='icon-box'>
                  <div className='icon'>
                    <AiOutlineFieldTime size={'1.4em'} />
                  </div>
                  <div className='box-content'>
                    <h4>RUNNING TIME</h4>
                    <p>{movie.runtime + ' mins'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='more-details'>
            <div className='poster'>
              <img
                src={movie.poster_path ? getImage(movie.poster_path, 500) : ''}
                alt={movie.title}
              />
            </div>
            <div className='details'>
              <div>
                <h2>Tag Line</h2>
                <p>{movie.tagline}</p>
              </div>
              <div>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h4>Status</h4>
                <p>{movie.status}</p>
              </div>
              <div>
                <h4>Language</h4>
                {movie.spoken_languages?.map((language, index) => (
                  <p key={index}>{language.name}</p>
                ))}
              </div>
              <div>
                <h4>Adult</h4>
                <p>{movie.adult ? 'Yes' : 'No'}</p>
              </div>
            </div>
            {videoId && (
              <div
                className='trailer'
                style={{
                  backgroundImage: `url(${
                    movie.backdrop_path
                      ? getImage(movie?.backdrop_path, 500)
                      : ''
                  })`,
                }}
              >
                <button
                  type='button'
                  className='play-btn'
                  onClick={handlePlayer}
                >
                  <AiFillPlayCircle size={50} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
