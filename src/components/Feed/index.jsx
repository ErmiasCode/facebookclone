import { useEffect, useState } from 'react'
import './Feed.css'

import db from '../../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

import CreatePost from '../CreatePost'
import StoryReel from '../StoryReel'
import Post from '../Post'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const messagesRef = collection(db, 'posts');
    onSnapshot(messagesRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    })
   
  }, [])

  console.log("Test:", posts)

  posts.sort((a, b) => {
    return b.data.timestamp - a.data.timestamp
  })

  return (
    <div className='feed'>
        <StoryReel />
        <CreatePost />

        {posts.map((post) => (
          <Post 
            key={post.id}
            userImg={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            message={post.data.message}
            timestamp={post.data.timestamp}
          />
        ))}
    </div>
  )
}

export default Feed