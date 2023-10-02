import './Post.css'

import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp } from '@material-ui/icons'

const Post = ({userImg, image, username, timestamp, message}) => {
  return (
    <div className='post'>
      <div className="post__top">
        <Avatar src={userImg} className='post__avatar' />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className='post__image' >
        <img src={image} alt='' />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>

    </div>
  )
}

export default Post