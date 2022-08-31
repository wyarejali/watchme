import React from 'react'
import { TvCard } from '../components/'
import { useGlobalState } from '../context/movieContext'

const TvShows = () => {
  const { isLoading, tvShows } = useGlobalState()
  return (
    <section className='movies tv-shows'>
      <div className='container'>
        <div className='section-title'>
          <h3>Tv Shows</h3>
          <p>TV shows airing right now.</p>
        </div>
        <div className='movies-card'>
          {isLoading && <h3>...Loading</h3>}
          {tvShows.map((tvShow) => {
            return <TvCard key={tvShow.id} {...tvShow} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TvShows
