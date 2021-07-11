import React, { useState } from 'react'
import '../styles/globals.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  const [crossButton, setCrossButton] = useState('false')
  return (
    <>
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
