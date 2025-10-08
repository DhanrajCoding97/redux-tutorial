import React from 'react'
import Counter from './components/Counter'
import PostList from './app/features/posts/PostList'
const App = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 bg-black text-white'>
      <Counter />
      <PostList/>
    </div>
  )
}

export default App