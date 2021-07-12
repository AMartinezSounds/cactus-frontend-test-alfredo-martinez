import Head from 'next/head'
import fetch from 'node-fetch'
import BlogPost from '../../components/blog/BlogPost'
import { useState, useEffect } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export async function getStaticProps () {
  const resText = await fetch('https://jsonplaceholder.typicode.com/posts')
  const resImages = await fetch('https://jsonplaceholder.typicode.com/photos')
  const dataText = await resText.json()
  const dataImages = await resImages.json()
  return {
    props: { postsText: dataText, postsImages: dataImages }
  }
}

export default function Posts ({ postsText, postsImages }) {
  /* eslint-disable-next-line */
  const [posts, updateposts] = useState(postsText)
  const [diplayedPosts, updateDisplayedPosts] = useState([])
  const [selectedPage, updateSelectedPage] = useState(1)
  /* eslint-disable-next-line */
  const [pages, updatePages] = useState(posts.length / 10)

  useEffect(() => {
    postsToRender(posts, selectedPage)
  }, [selectedPage])

  const images = postsImages.map((postImage) => {
    return postImage.thumbnailUrl
  })

  const postsToRender = (posts, page) => {
    const firstIndex = (page * 10) - 9
    const lastIndex = (page * 10)
    const postByPage = posts.filter(i => i.id <= lastIndex && i.id >= firstIndex)
    updateDisplayedPosts(postByPage)
  }

  const handlePageClick = (selectedPage, next) => {
    if (next === true && selectedPage !== pages) {
      updateSelectedPage(selectedPage + 1)
      return
    }

    if (next === false && selectedPage !== 1) {
      updateSelectedPage(selectedPage - 1)
      console.log('test')
    }
  }

  return (
    <>
      <Head>
        <title>Alessio Muganni - Blog</title>
        <link rel='icon' href='/logo.png' />
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap' rel='stylesheet' />
      </Head>
      <div className='w-[90%] mx-auto desktop:pt-28'>
        <h1 className='w-[90%] mx-auto mb-8 text-center text-sectionTitle'>Blog</h1>
        <div className='flex flex-col gap-y-[40px] gap-x-px md:flex-row flex-wrap'>
          {diplayedPosts.map((post, i) => {
            return <BlogPost post={post} image={images[i]} key={i} />
          })}
        </div>
        <div className='flex justify-between items-center w-[25%] min-w-[300px] mx-auto my-[75px]'>
          <button onClick={() => handlePageClick(selectedPage, false)}><MdKeyboardArrowLeft style={{ fontSize: '2rem' }} /></button>
          <p className='text-primary text-xl'>{selectedPage} / {pages}</p>
          <button onClick={() => handlePageClick(selectedPage, true)}><MdKeyboardArrowRight style={{ fontSize: '2rem' }} /></button>
        </div>
      </div>
    </>
  )
}
