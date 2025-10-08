import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'
const PostList = () => {
  const posts = useSelector(selectAllPosts || [])
  const renderedPosts = posts.map(post => (
		<article className='h-30 w-11/12 flex flex-col items-center justify-center border border-green-100 rounded-md' key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
		</article>
	))
  return (
    <section className='min-h-screen flex flex-col items-center  gap-6'>
			<h2 className='text-5xl mb-4'>Posts</h2>
			{renderedPosts}
		</section>
  )
}

export default PostList