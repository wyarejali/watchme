import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/WatchMe_logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='widgets-area'>
        <div className='container'>
          <div className='ft-wrapper'>
            <div className='ft-widget'>
              <h3 className='ft-widget-title'>About us</h3>
              <div className='ft-widget-content'>
                <div className='logo'>
                  <img width='100%' src={Logo} alt='Logo' />
                </div>
                <div className='ft-widget-content about'>
                  WatchMe is an online database on infromation to related moveis
                  and telivision shows...
                </div>
              </div>
            </div>
            <div className='ft-widget'>
              <h3 className='ft-widget-title'>Explore</h3>
              <div className='ft-widget-content'>
                <ul className='ft-menu'>
                  <li>
                    <a href='/'>Upcoming Movies</a>
                  </li>
                  <li>
                    <a href='/'>Top Movies</a>
                  </li>
                  <li>
                    <a href='/'>Top TV Shows</a>
                  </li>
                  <li>
                    <a href='/'>New Movies in Theaters</a>
                  </li>
                  <li>
                    <a href='/'>Currently Airing TV Shows</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='ft-widget'>
              <h3 className='ft-widget-title'>Usefull Links</h3>
              <div className='ft-widget-content'>
                <ul className='ft-menu'>
                  <li>
                    <a href='/'>Upcoming Movies</a>
                  </li>
                  <li>
                    <a href='/'>Top Movies</a>
                  </li>
                  <li>
                    <a href='/'>Top TV Shows</a>
                  </li>
                  <li>
                    <a href='/'>New Movies in Theaters</a>
                  </li>
                  <li>
                    <a href='/'>Currently Airing TV Shows</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='ft-widget'>
              <h3 className='ft-widget-title'>Pages</h3>
              <div className='ft-widget-content'>
                <ul className='ft-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='movies'>Movies</Link>
                  </li>
                  <li>
                    <Link to='terms-conditions'>Terms Conditions</Link>
                  </li>
                  <li>
                    <Link to='privacy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-text-area'>
        <div className='container'>
          <p className='copyright-text'>
            Copyright © 2015 - {new Date().getFullYear()}{' '}
            <a target='_blank' rel='noreferrer' href='https://wyarejali.com'>
              {' '}
              wyarejali.com{' '}
            </a>
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
