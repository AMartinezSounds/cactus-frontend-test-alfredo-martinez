import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavLink from './NavLink'

function MobileNav ({ setCrossButton, crossButton }) {
  const router = useRouter()
  return (
    <nav className={`mobileNavOff ${crossButton === 'false' ? '' : 'transition-[top] duration-300 ease-linear top-[96px]'} ${router.pathname.includes('/blog') ? 'hidden' : ''}`}>
      <ul className='h-full flex flex-col justify-evenly items-center text-xl'>
        <NavLink section='home' nameLink='Home' offset={-75} setCrossButton={setCrossButton} />
        <NavLink section='about' nameLink='About' offset={-75} setCrossButton={setCrossButton} />
        <NavLink section='contact' nameLink='Contact' offset={-75} setCrossButton={setCrossButton} />
        <li>
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
