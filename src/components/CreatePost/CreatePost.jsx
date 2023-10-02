import './CreatePost.css'

import { useState } from 'react';

import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'

const CreatePost = () => { 
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
        e.preventDefault()
  }

  return (
    <div className='createPost'>
        <div className='createPost__top'>
            <Avatar />
            <form>
                <input 
                    className='createPost__input'
                    placeholder='Create a post' 
                    value={input}
                    onChange={(e) => setInput(e.target)}
                />
                <input 
                    className='' 
                    placeholder='Image URL (Optional)' 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target)}
                />
                <button onClick={handleSubmit} type='submit'>Send</button>
            </form>          
        </div>
        <div className='createPost__bottom'>
            <div className="createPost__options">
                <div className="createPost__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="createPost__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="createPost__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CreatePost