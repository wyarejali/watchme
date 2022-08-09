import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='copyright-text'>
          Copyright © 2015 - {new Date().getFullYear()}{' '}
          <a target='_blank' rel='noreferrer' href='https://wyarejali.com'>
            wyarejali.com
          </a>
          | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
