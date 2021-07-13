import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { useRouter } from 'next/router'

function NavLink ({ section, nameLink, offset, setCrossButton }) {
  const router = useRouter()
  return (
    <>
      <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to={section} smooth duration={750} offset={offset} onClick={() => setCrossButton('false')}>{nameLink}</LinkScroll></li>
    </>
  )
}

export default NavLink
