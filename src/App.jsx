import React from 'react'
import Counter from './components/Counter'
import PostList from './app/features/posts/PostList'
const App = () => {
  return (
    <div className='wrapper'>
      <Counter />
      <PostList/>
    </div>
  )
}

export default App