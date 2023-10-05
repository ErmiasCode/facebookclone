import './CreatePost.css'

import { useState } from 'react';

import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import { useStateValue } from '../../config/StateProvider';

import db from '../../config/firebase';
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

const CreatePost = () => { 
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const handleSubmit = (e) => {
        e.preventDefault()

        const messagesRef = collection(db, 'posts');
        addDoc(messagesRef, {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
  }

  return (
    <div className='createPost'>
        <div className='createPost__top'>
            <Avatar src={user.photoURL} />
            <form>
                <input 
                    className='createPost__input'
                    placeholder='Create a post' 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input 
                    className='' 
                    placeholder='Image URL (Optional)' 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
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