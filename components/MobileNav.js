import React from 'react'

import { Link } from 'react-scroll'



function MobileNav ({ setCrossButton, crossButton }) {
  return (
    <div className={`mobileNavOff ${crossButton === 'false' ? 'top-[0px]' : 'top-[95px]'}`}>
      <ul className='h-full flex flex-col justify-evenly'>
        <li className='text-center text-xl'>
          <Link to='home' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            Home
          </Link>
        </li>
        <li className='text-center text-xl'>
          <Link to='about' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            About
          </Link>
        </li>
        <li className='text-center text-xl'>
          <Link to='contact' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
