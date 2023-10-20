import { useState, useRef } from 'react';
import './CreatePost.css'

import db from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { Avatar } from "@mui/material"
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { useStateValue } from '../../config/StateProvider';

const CreatePost = () => { 
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState("");
  const filePickerRef = useRef(null);
  const [fileImage, setFileImage] = useState(null);


  const handleSubmit = (e) => {
        e.preventDefault()

        if (!input && !imageUrl) return;

        const messagesRef = collection(db, 'posts');
        addDoc(messagesRef, {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('')
        setImageUrl('')
        setFileImage(null)
  }

  const addPostImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setFileImage(readerEvent.target.result)
            setImageUrl(readerEvent.target.result)
        }
  }

  const removeFileImage = () => {
        setFileImage(null)
        setImageUrl("")
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
                {!fileImage ? (
                <input 
                    className='' 
                    placeholder='Image URL (Optional)' 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />) : (
                    <div onClick={removeFileImage}className='createPost__imageContainer'>
                        <img className='createPost__imagePreview' src={fileImage} alt='Preview' />
                    </div>
                )}
                <button onClick={handleSubmit} type='submit'>Send</button>
            </form>          
        </div>
        <div className='createPost__bottom'>
            <div className="createPost__options">
                <div className="createPost__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div onClick={() => filePickerRef.current.click()} className="createPost__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                    <input type="file" ref={filePickerRef} onChange={addPostImage} hidden />
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