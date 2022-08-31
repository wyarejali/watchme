import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/Card'

// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const movieUrl = `https://api.themoviedb.org/3/discover/movie${api_key}&language=en-US`
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list${api_key}&language=en-US`

const Movies = () => {
  const [items, setItems] = useState([])
  const [genres, setGenres] = useState([])
  const [selectGenres, setSelectGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(null)

  const movie = useRef()
  // Get the movie or Serise or Tv shows
  useEffect(() => {
    const genre = selectGenres.join(',')
    const getMovies = async () => {
      setIsLoading(true)

      try {
        const { data } = await axios.get(
          `${movieUrl}&with_genres=${genre}&page=${page}`
        )
        setItems(data.results)
        setTotalPage(data.total_pages)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [page, selectGenres])

  // Get all the genres of the movies
  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get(`${genreUrl}`)
        setGenres(data.genres)
      } catch (error) {
        console.log(error)
      }
    }
    getGenres()
  }, [])

  const handleGenreChange = (e) => {
    const value = e.target.value
    const isGenre = e.target.checked
    if (isGenre) {
      setSelectGenres([...selectGenres, value])
    } else {
      const newSelectGenres = selectGenres.filter(
        (selectGenre) => selectGenre !== value
      )
      setSelectGenres(newSelectGenres)
    }
  }

  const pageIncrease = (e) => {
    e.preventDefault()
    if (page > totalPage) return setPage(1)
    setPage(page + 1)
    movie.current.scrollIntoView({ behavior: 'smooth' })
  }
  const pageDecrease = (e) => {
    e.preventDefault()
    if (page <= 1) return setPage(1)
    setPage(page - 1)
    movie.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='browse-movie-by-filter'>
      <div className='container'>
        <div className='movie-filter'>
          <div className='filter'>
            <h2 className='heading'>Filter</h2>
            <form>
              <div className='filter-options'>
                <div className='type genres'>
                  <h5 className='title'>With selected genres</h5>
                  <div className='genres-filter-group'>
                    {genres.map((genre) => {
                      return (
                        <div
                          key={genre.name + genre.id}
                          className='form-control'
                        >
                          <input
                            type='checkbox'
                            name={genre.name}
                            id={genre.name}
                            value={genre.id}
                            onChange={handleGenreChange}
                          />
                          <label htmlFor={genre.name} id={genre.name}>
                            {genre.name}
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div ref={movie} className='filtered-movie'>
            <h2 className='heading'>Browse</h2>
            {isLoading ? (
              <h3 style={{ textAlign: 'center' }}>...Loading</h3>
            ) : (
              <div className='movies-card page-movies'>
                {items.length < 1 && <h3>No Items Found</h3>}
                {items?.map((item) => {
                  return <Card key={item.id} {...item} />
                })}
              </div>
            )}

            {!isLoading && (
              <div className='pagination'>
                <button
                  onClick={pageDecrease}
                  type='button'
                  className='btn prev'
                >
                  Prev
                </button>
                <button
                  onClick={pageIncrease}
                  type='button'
                  className='btn next'
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movies
