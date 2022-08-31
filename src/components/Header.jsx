import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/WatchMe_logo.png'

const Header = () => {
  const navigate = useNavigate()

  // Default state for the header element
  const [searchBoxOpen, setSearchBoxOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Handle query for search items
  const [query, setQuery] = useState('')
  // Handle navigation
  const { pathname } = useLocation()
  // Handle mobile search box opening
  const searchBox = (e) => {
    e.preventDefault()
    setSearchBoxOpen(!searchBoxOpen)
  }
  // Handle mobile menu opening
  const handleMobileMenu = (e) => {
    e.preventDefault()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Handle search query after submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      navigate(`/search?query=${query}`, { replace: true })
    }
  }
  return (
    <header
      className={`${
        pathname !== '/movies' &&
        pathname !== '/search' &&
        pathname !== '/about' &&
        pathname !== '/contact' &&
        pathname !== '/terms-conditions' &&
        pathname !== '/privacy' &&
        pathname !== '/tv'
          ? 'absolute'
          : 'relative'
      }`}
    >
      <div className='container'>
        <div className='nav'>
          <div className='nav-header'>
            <div className='nav-title'>
              <div className='logo'>
                <Link to='/'>
                  <img width='100%' src={logo} alt='logo' />
                </Link>
              </div>
            </div>
          </div>
          <div className={`nav-search-box ${searchBoxOpen ? 'open' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  placeholder='Search for movies'
                  type='text'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className='btn search-btn' type='submit'>
                  Search
                </button>
                <button onClick={searchBox} className='close-btn'>
                  <VscClose />
                </button>
              </div>
            </form>
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {mobileMenuOpen && (
                <li>
                  <div className='logo'>
                    <img width='100%' src={logo} alt='logo' />
                  </div>
                </li>
              )}
              <li onClick={() => setMobileMenuOpen(false)}>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li onClick={() => setMobileMenuOpen(false)}>
                <NavLink to='/about' className='nav-link'>
                  About Us
                </NavLink>
              </li>
              <li onClick={() => setMobileMenuOpen(false)}>
                <NavLink to='/movies' className='nav-link'>
                  Movies
                </NavLink>
              </li>
              <li onClick={() => setMobileMenuOpen(false)}>
                <NavLink to='/tv' className='nav-link'>
                  TV Shows
                </NavLink>
              </li>
              <li onClick={() => setMobileMenuOpen(false)}>
                <NavLink to='/contact' className='nav-link'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-btn'>
            <button onClick={searchBox} className='close-btn'>
              <BsSearch />
            </button>
            {mobileMenuOpen ? (
              <button onClick={handleMobileMenu} className='close-btn'>
                <VscClose />
              </button>
            ) : (
              <button onClick={handleMobileMenu} className='menu-btn'>
                <AiOutlineMenu style={{ fontSize: '20px' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
