import './Feed.css'

import CreatePost from '../CreatePost/CreatePost'
import StoryReel from '../StoryReel/StoryReel'
import Post from '../Post/Post'

const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel />
        <CreatePost />

        <Post 
          userImg="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw"
          image={"https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg"}
          username={"Test User"}
          timestamp={"timestamp"}
          message={"Its working!"}
        />
        
        <Post 
          userImg="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw"
          image={"https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg"}
          username={"Test User"}
          timestamp={"timestamp"}
          message={"Its working!"}
        />
    </div>
  )
}

export default Feed