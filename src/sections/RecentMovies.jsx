import React from 'react'
import Card from '../components/Card'
import { useGlobalState } from '../context/movieContext'
const RecentMovies = () => {
  const { isLoading, nowPlayingMovie, trendingMovie, tvShows } =
    useGlobalState()
  return (
    <>
      <section className='movies playing'>
        <div className='container'>
          <div className='section-title'>
            <h3>Movie playing in theaters</h3>
            <p>Movies that are currently playing in theaters.</p>
          </div>
          <div className='movies-card'>
            {isLoading && <h3>...Loading</h3>}
            {nowPlayingMovie.map((movie) => {
              return <Card key={movie.id} {...movie} />
            })}
          </div>
        </div>
      </section>
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
      <section className='movies tv-shows'>
        <div className='container'>
          <div className='section-title'>
            <h3>Tv Shows</h3>
            <p>TV shows airing right now.</p>
          </div>
          <div className='movies-card'>
            {isLoading && <h3>...Loading</h3>}
            {tvShows.map((tvShow) => {
              return <Card key={tvShow.id} {...tvShow} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentMovies
