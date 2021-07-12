import { getStaticProps } from '../pages/blog'

describe('Check we get all posts from our blog', () => {
  test('checks if we have any posts', async () => {
    const posts = await getStaticProps([
      'title',
      'body'
    ])
    expect(posts.length > 0).toBeTruthy()
  })
})
