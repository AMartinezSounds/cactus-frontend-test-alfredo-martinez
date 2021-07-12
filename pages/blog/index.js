import fetch from 'node-fetch'
import BlogPost from '../../components/blog/BlogPost'

// http://localhost:3000/blog

// Get all Posts and Images from endpoints

export async function getStaticProps () {
  const resText = await fetch('https://jsonplaceholder.typicode.com/posts')
  const resImages = await fetch('https://jsonplaceholder.typicode.com/photos')
  const dataText = await resText.json()
  const dataImages = await resImages.json()
  return {
    props: { postsText: dataText, postsImages: dataImages }
  }
}

// display all posts, images and pagination

export default function Posts ({ postsText, postsImages }) {
  const images = postsImages.map((postImage) => {
    return postImage.thumbnailUrl
  })
  return (
    <div className='w-[90%] mx-auto desktop:pt-28'>
      <h1 className='w-[90%] mx-auto mb-8 text-center text-sectionTitle'>Blog</h1>
      <div className='flex gap-y-[40px] flex-col ls:flex-row flex-wrap gap-x-px'>
        {postsText.map((post, i) => {
          return <BlogPost post={post} image={images[i]} key={i} />
        })}
      </div>
    </div>
  )
}
