import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const MobileNavStyle = styled.div`
   position: absolute;
   transition: top 0.33s ease;
   top: ${(props) => (props.show === 'false' ? '-25.4rem' : '11.8%')};
   right: 0;
   left: 1.8rem;
   
`

function MobileNav ({ crossButton, setCrossButton }) {
  return (
    <MobileNavStyle show={crossButton}>
      <nav className='h-[49vh]'>
        <ul className='h-full flex flex-col justify-evenly bg-white'>
          <li className='text-center text-xl'>
            <Link onClick={() => setCrossButton('false')}>
              Home
            </Link>
          </li>
          <li className='text-center text-xl'>
            <Link onClick={() => setCrossButton('false')}>
              About
            </Link>
          </li>
          <li className='text-center text-xl'>
            <Link onClick={() => setCrossButton('false')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </MobileNavStyle>
  )
}

export default MobileNav
