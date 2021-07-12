import useSwr from 'swr'
import fetch from 'node-fetch'
import BlogPost from '../components/blog/BlogPost'

async function fetcherFunc (url) {
  const res = await fetch(url)
  return res.json()
}

export default function Blog () {
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
  const urlImages = 'https://jsonplaceholder.typicode.com/photos'
  const { data: posts } = useSwr(urlPosts, fetcherFunc)
  const { data: images } = useSwr(urlImages, fetcherFunc)
  if (!posts) return <div>Loading...</div>
  if (!images) return <div>Loading...</div>
  const postImages = images.map((postImage) => {
    return postImage.thumbnailUrl
  })
  return (
    <>
      <h2>Welcome to blog</h2>
      {posts.map((post, i) => {
        return <BlogPost post={post} postImage={postImages[i]} key={i} />
      })}
    </>
  )
}
