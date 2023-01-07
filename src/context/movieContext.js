import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
// api urls for getting the movie
const api_key = `?api_key=${process.env.REACT_APP_API_KEY}`
const baseUrl = 'https://api.themoviedb.org/3/'
const image_url = 'https://image.tmdb.org/t/p/'

// Create movie context
const movieContext = createContext()
// App Provider
const AppProvider = ({ children }) => {
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [topRatedMovie, setTopRatedMovie] = useState([])
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const [trendingMovie, setTrendingMovie] = useState([])
  const [tvShows, setTvShows] = useState([])

  const getMovies = async () => {
    setIsLoading(true)
    await Promise.allSettled([
      axios(`${baseUrl}movie/top_rated${api_key}`),
      axios(`${baseUrl}movie/now_playing${api_key}&language=en-US&page=1`),
      axios(`${baseUrl}trending/movie/day${api_key}`),
      axios(`${baseUrl}tv/airing_today${api_key}&language=en-US`),
    ])
      .then((results) => {
        const [topRatedMovie, nowPlaying, trending, tv] = results

        const tenTorRatedMoves = topRatedMovie.value.data.results.slice(0, 10)
        const tenPlayingMovie = nowPlaying.value.data.results.slice(0, 10)
        const tenTrendingMovie = trending.value.data.results.slice(0, 10)
        const tenTV = tv.value.data.results.slice(0, 10)

        // Stop Loading
        setIsLoading(false)
        // set the value to the state variable
        setTopRatedMovie(tenTorRatedMoves)
        setNowPlayingMovie(tenPlayingMovie)
        setTrendingMovie(tenTrendingMovie)
        setTvShows(tenTV)
      })
      .catch((error) => console.log(error))
  }

  const getImage = (path, size) => {
    return `${image_url}w${size}${path}`
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <movieContext.Provider
      value={{
        isLoading,
        topRatedMovie,
        nowPlayingMovie,
        trendingMovie,
        tvShows,
        getImage,
        isPlayerModalOpen,
        setIsPlayerModalOpen,
      }}
    >
      {children}
    </movieContext.Provider>
  )
}

// custom hook
const useGlobalState = () => {
  return useContext(movieContext)
}
export { AppProvider, useGlobalState }
