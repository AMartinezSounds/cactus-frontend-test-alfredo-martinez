import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Icon = styled.div`
  @media(min-width: 640px){
    display: none;
  } 
`

function Nav ({ crossButton, setCrossButton }) {
  return (
    <nav className='flex h-24 desktop:absolute top:0 left-[5rem] right-[5rem] bg-white'>
      <div className='w-[90%] m-auto flex justify-between items-center md:w-[77.39%] ls:w-11/12'>
        <h1>Alessio Muganni</h1>
        <ul className='hidden sm2:flex justify-between w-5/12 md:w-4/12'>
          <li><Link to='home' activeClass='active' spy={true} smooth={true} duration={750}>Home</Link></li>
          <li><Link to='about' activeClass='active' spy={true} smooth={true} duration={750}>About</Link></li>
          <li><Link to='contact' activeClass='active' spy={true} smooth={true} duration={750}>Contact</Link></li>
        </ul>
        <Icon
          onClick={() =>
            crossButton === 'false'
              ? setCrossButton('true')
              : setCrossButton('false')
          }
        >
          {crossButton === 'false' ? <GiHamburgerMenu style={{ fontSize: '1.5rem' }} /> : <FaTimes style={{ fontSize: '1.5rem' }} />}
        </Icon>
      </div>
    </nav>
  )
}

export default Nav
