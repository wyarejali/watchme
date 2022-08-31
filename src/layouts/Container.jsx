import React from 'react'
import { Footer, Header } from '../components'

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
