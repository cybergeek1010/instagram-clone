import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed({posts,setPosts}) {
  return (
    <div>
        <div><Stories/></div>
        <div><Posts
        posts={posts}
        setPosts={setPosts}
        /></div>
    </div>
  )
}

export default Feed;