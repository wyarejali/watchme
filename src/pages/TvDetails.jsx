import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
  AiFillPlayCircle,
  AiFillStar,
  AiOutlineFieldTime,
  AiOutlineNumber,
} from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { PlayerModal } from '../components'
import { useGlobalState } from '../context/movieContext'

// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const baseUrl = `https://api.themoviedb.org/3/tv/`

const TvDetails = () => {
  const page = useRef()
  const { getImage, isPlayerModalOpen, setIsPlayerModalOpen } = useGlobalState()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [tv, setTv] = useState({})
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `${baseUrl}${id}${api_key}&language=en-US`
      try {
        setIsLoading(true)
        await Promise.all([
          axios(url),
          axios(`${baseUrl}${id}/videos${api_key}`),
        ]).then((results) => {
          const [tvData, trailer] = results
          setTv(tvData.data)
          let videoData
          trailer.data.results.filter((video) => {
            if (video.official && video.type === 'Trailer') {
              videoData = video
            }
            return videoData
          })
          console.log(videoData)
          setVideoId(videoData?.key ? videoData.key : '')
          setIsLoading(false)
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
              tv?.backdrop_path ? getImage(tv.backdrop_path, 1280) : ''
            })`,
          }}
        ></div>
        <div className='container'>
          <div className='detail-header'>
            <div>
              <h1>{tv.name}</h1>
              <div className='categories'>
                {tv.genres?.map((genre, index) => (
                  <p key={index} className='genre'>
                    {genre.name}
                    <span> / </span>
                  </p>
                ))}
              </div>
              <div className='rating'>
                <AiFillStar color='#FFC000' size={'1.5em'} />{' '}
                {tv.vote_average?.toFixed(2)} / 10 <b>Total Vote:</b>{' '}
                {tv.vote_count}
              </div>
            </div>
            <div className='icon-box-area'>
              <div className='icon-box'>
                <div className='icon'>
                  <BsCalendar2Date size={'1.4em'} />
                </div>
                <div className='box-content'>
                  <h4>FIRST AIR DATE</h4>
                  <p>{tv.first_air_date}</p>
                </div>
              </div>
              <div>
                <div className='icon-box'>
                  <div className='icon'>
                    <AiOutlineNumber size={'1.4em'} />
                  </div>
                  <div className='box-content'>
                    <h4>NUMBER OF EPS</h4>
                    <p>
                      {tv.number_of_episodes === 0
                        ? 'Unkown'
                        : tv.number_of_episodes}
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
                    <p>{tv.episode_run_time + ' mins'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='more-details'>
            <div className='poster'>
              <img
                src={tv?.poster_path ? getImage(tv.poster_path, 500) : ''}
                alt=''
              />
            </div>
            <div className='details'>
              <div>
                <h2>Created By</h2>
                <div className='created-by'>
                  {tv.created_by?.lenght > 0
                    ? tv.created_by?.map((creator) => (
                        <div className='creator'>
                          <img
                            src={
                              creator.profile_path
                                ? getImage(creator.profile_path, 200)
                                : ''
                            }
                            alt={creator.name}
                          />
                          <p>{creator.name}</p>
                        </div>
                      ))
                    : 'Unkown'}
                </div>
              </div>
              <div>
                <h2>Tag Line</h2>
                <p>{tv.tagline}</p>
              </div>
              <div>
                <h4>Overview</h4>
                <p>{tv.overview}</p>
              </div>
              <div>
                <h4>Status</h4>
                <p>{tv.status}</p>
              </div>
              <div>
                <h4>Language</h4>
                {tv.spoken_languages?.map((language, index) => (
                  <p key={index}>{language.name}</p>
                ))}
              </div>
              <div>
                <h4>Adult</h4>
                <p>{tv.adult ? 'Yes' : 'No'}</p>
              </div>
            </div>
            {videoId && (
              <div
                className='trailer'
                style={{
                  backgroundImage: `url(${
                    tv.backdrop_path ? getImage(tv?.backdrop_path, 500) : ''
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

export default TvDetails
