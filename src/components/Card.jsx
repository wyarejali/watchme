import React from 'react'
import { useGlobalState } from '../context/movieContext'
const Card = ({ id, poster_path, title, name }) => {
  const { getImage } = useGlobalState()
  return (
    <div className='card'>
      <img src={getImage(poster_path, 500)} alt={title} />
      <h4 className='name'>{title || name}</h4>
      <h5 className='category'>Action / Adventure</h5>
    </div>
  )
}

export default Card
