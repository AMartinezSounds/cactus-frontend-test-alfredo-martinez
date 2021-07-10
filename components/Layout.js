import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function Layout ({ children }) {
  const [crossButton, setCrossButton] = useState('false')
  return (
    <div>
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <MobileNav crossButton={crossButton} setCrossButton={setCrossButton} />
      {children}
      <Footer />
    </div>
  )
}
