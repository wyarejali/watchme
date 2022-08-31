import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { TvCard } from '../components'

// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const url = `https://api.themoviedb.org/3/discover/tv${api_key}&language=en-US`
const Tv = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tvShows, settvShows] = useState([])
  const [page, setPage] = useState(1)
  const [totatPage, setTotatPage] = useState(null)
  const tv = useRef()

  useEffect(() => {
    const getTvShows = async () => {
      try {
        const { data } = await axios.get(`${url}&page=${page}`)
        if (data) {
          settvShows(data.results)
          setTotatPage(data.total_pages)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getTvShows()
  }, [page])

  const pageIncrease = (e) => {
    e.preventDefault()
    if (page > totatPage) return setPage(1)
    setPage(page + 1)
    tv.current.scrollIntoView({ behavior: 'smooth' })
  }
  const pageDecrease = (e) => {
    e.preventDefault()
    if (page <= 1) return setPage(1)
    setPage(page - 1)
    tv.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={tv} className='movies tv-shows'>
      <div className='container'>
        <div className='section-title'>
          <h3>Tv Shows</h3>
          <p>TV shows airing right now.</p>
        </div>
        {isLoading ? (
          <h3 style={{ textAlign: 'center' }}>...Loading</h3>
        ) : (
          <>
            <div className='movies-card'>
              {tvShows.length < 1 && <h3>No Items Found</h3>}
              {tvShows?.map((tvShow) => {
                return <TvCard key={tvShow.id} {...tvShow} />
              })}
            </div>
            <div className='pagination'>
              <button onClick={pageDecrease} type='button' className='btn prev'>
                Prev
              </button>
              <button onClick={pageIncrease} type='button' className='btn next'>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Tv
