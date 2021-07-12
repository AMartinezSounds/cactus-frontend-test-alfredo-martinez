import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function BlogPost ({ post, id, postImage }) {
  return (
    <>
      <div className='w-[90%] mx-auto flex flex-col py-8'>
        <h2>{post.title}</h2>
        <div className='flex justify-between items-center'>
          <div className='readBtn'>
            <Link href={'/blog/' + post.id} key={post.id}>Read</Link>
          </div>
          <Image className='object-contain' src={postImage} width={150} height={150} alt='blog image' />
        </div>
        <div className='smallLine' />
      </div>
    </>
  )
}

export default BlogPost
