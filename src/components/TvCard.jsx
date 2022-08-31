import React from 'react'
import { Link } from 'react-router-dom'
import default_poster from '../assets/default_poster.jpg'
import { useGlobalState } from '../context/movieContext'

const TvCard = ({ id, poster_path, title, name }) => {
  const { getImage } = useGlobalState()
  return (
    <div className='card'>
      <Link to={`/tv/${id}`}>
        <img
          src={poster_path ? getImage(poster_path, 500) : default_poster}
          alt={title}
        />
      </Link>
      <Link to={`/movie/${id}`}>
        <h4 className='name'>{title || name}</h4>
      </Link>
      {/* <h5 className='category'>Action / Adventure</h5> */}
    </div>
  )
}

export default TvCard
