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
    <nav className='flex h-24'>
      <div className='w-11/12 m-auto flex justify-between items-center md:w-full'>
        <h1>Alessio Muganni</h1>
        <ul className='hidden sm2:flex justify-between w-5/12 md:4/12'>
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Contact</Link></li>
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
