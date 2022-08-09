import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import Error from './pages/Error'
import Home from './pages/Home'
import Movies from './pages/Movies'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
