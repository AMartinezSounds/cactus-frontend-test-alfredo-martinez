import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function BlogPost ({ post, image }) {
  return (
    <article className='w-[25%] min-w-[300px] mx-auto border border-terciary'>
      <div className='flex flex-col py-8 items-center justify-between h-[500px]'>
        <h2 className='mx-auto w-[90%] text-center text-xl h-[25%]'>{post.title}</h2>
        <Image className='object-contain' src={image} width={150} height={150} alt='blog image' />
        <div className='readBtn transition duration-300 ease-in-out hover:bg-secondary active:bg-terciary'>
          <Link href={'/blog/' + post.id} key={post.id}>Read</Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
