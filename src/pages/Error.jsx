import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../assets/Error.jpg'

const Error = () => {
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
        <img width='100%' src={errorImage} alt='Page not found' />
        <h3
          style={{ marginBottom: '20px', fontWeight: '400', fontSize: '18px' }}
        >
          Opps! We can't find the page you're looking for.
        </h3>
        <Link to='/' className='btn'>
          Go To Home
        </Link>
      </div>
    </section>
  )
}

export default Error
