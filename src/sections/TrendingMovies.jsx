import React from 'react'
import Card from '../components/Card'
import { useGlobalState } from '../context/movieContext'
const TrendingMovies = () => {
  const { isLoading, trendingMovie } = useGlobalState()
  return (
    <>
      <section className='movies trending'>
        <div className='container'>
          <div className='section-title'>
            <h3>Trending Movies</h3>
            <p>Movies are currenly trending over the word</p>
          </div>
          <div className='movies-card'>
            {isLoading && <h3>...Loading</h3>}
            {trendingMovie.map((movie) => {
              return <Card key={movie.id} {...movie} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default TrendingMovies
