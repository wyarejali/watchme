import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import Container from './layouts/Container'
import { AppProvider } from './context/movieContext'

const root = createRoot(document.getElementById('movie_root'))

root.render(
  <AppProvider>
    <Router>
      <Container>
        <App />
      </Container>
    </Router>
  </AppProvider>
)
