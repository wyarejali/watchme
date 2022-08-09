import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const searchBox = (e) => {
    e.preventDefault()
    setSearchBoxOpen(!searchBoxOpen)
  }

  const handleMobileMenu = (e) => {
    e.preventDefault()
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <header className={`${pathname === '/' ? 'absolute' : 'relative'}`}>
      <div className='container'>
        <div className='nav'>
          <input type='checkbox' id='nav-check'></input>
          <div className='nav-header'>
            <div className='nav-title'>
              <h2>
                Watch<span className='secondary-color'>ME</span>
              </h2>
            </div>
          </div>
          <div className={`nav-search-box ${searchBoxOpen ? 'open' : ''}`}>
            <form>
              <div className='form-group'>
                <input
                  placeholder='Search for movies, tv shows and more...'
                  type='text'
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
              <li>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/movies' className='nav-link'>
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink to='/series' className='nav-link'>
                  Serise
                </NavLink>
              </li>
              <li>
                <NavLink to='/news' className='nav-link'>
                  News
                </NavLink>
              </li>
              <li>
                <a
                  rel='noreferrer'
                  href='https://wyarejali.com'
                  className='btn'
                >
                  Go To Root
                </a>
              </li>
            </ul>
          </div>
          <div className='nav-btn'>
            <button onClick={searchBox} className='close-btn'>
              <BsSearch />
            </button>
            <button onClick={handleMobileMenu} className='menu-btn'>
              <AiOutlineMenu style={{ fontSize: '25px' }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
