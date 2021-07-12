import React from 'react'
import { useRouter } from 'next/router'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'

function MobileNav ({ setCrossButton, crossButton }) {
  const router = useRouter()
  return (
    <nav className={`mobileNavOff ${crossButton === 'false' ? 'top-[0px]' : 'top-[95px]'} ${router.pathname.includes('/blog') ? 'hidden' : ''}`}>
      <ul className='h-full flex flex-col justify-evenly'>
        <li className='text-center text-xl'>
          <LinkScroll to='home' smooth duration={750} onClick={() => setCrossButton('false')}>
            Home
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <LinkScroll to='about' smooth duration={750} onClick={() => setCrossButton('false')}>
            About
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <LinkScroll to='contact' smooth duration={750} onClick={() => setCrossButton('false')}>
            Contact
          </LinkScroll>
        </li>
        <li className='text-center text-xl'>
          <Link href='/blog' onClick={() => setCrossButton('false')}>
            <a>
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
