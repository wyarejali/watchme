import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Container
