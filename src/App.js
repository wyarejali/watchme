import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import {
  About,
  Contact,
  Error,
  Home,
  MovieDetails,
  Movies,
  News,
  Privacy,
  Search,
  TermsCondition,
  Tv,
  TvDetails,
} from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      <Route path='/tv' element={<Tv />} />
      <Route path='/tv/:id' element={<TvDetails />} />
      <Route path='/news' element={<News />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='privacy' element={<Privacy />} />
      <Route path='terms-conditions' element={<TermsCondition />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
