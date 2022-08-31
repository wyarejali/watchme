import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillStar, AiOutlineFieldTime, AiOutlineNumber } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import no_image from '../assets/no_image.jpg'
import { useGlobalState } from '../context/movieContext'

// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const baseUrl = `https://api.themoviedb.org/3/tv/`

const TvDetails = () => {
  const page = useRef()
  const { getImage } = useGlobalState()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [tv, setTv] = useState({})

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `${baseUrl}${id}${api_key}&language=en-US`
      try {
        setIsLoading(true)
        const { data } = await axios.get(url)
        if (data) {
          setTv(data)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getMovieDetails()
    page.current.scrollIntoView({ behavior: 'smooth' })
  }, [id])

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
                  {' '}
                  {genre.name}
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
            <div>
              <h4>Production Companies</h4>
              <div className='production'>
                {tv.production_companies?.map((company, index) => (
                  <div key={index} className='company' title={company.name}>
                    <img
                      src={
                        company.logo_path
                          ? getImage(company.logo_path, 200)
                          : no_image
                      }
                      alt={company.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TvDetails
