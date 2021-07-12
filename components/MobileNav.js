import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'

function MobileNav ({ setCrossButton, crossButton }) {
  return (
    <div className={`mobileNavOff ${crossButton === 'false' ? 'top-[0px]' : 'top-[95px]'}`}>
      <ul className='h-full flex flex-col justify-evenly'>
        <li className='text-center text-xl'>
          <LinkScroll to='home' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            Home
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <LinkScroll to='about' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            About
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <LinkScroll to='contact' smooth={true} duration={750} onClick={() => setCrossButton('false')}>
            Contact
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <Link href='/blog' onClick={() => setCrossButton('false')}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
