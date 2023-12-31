import './Story.css'

import { Avatar } from '@mui/material'

const Story = ({ image, userImage, title }) => {
  return (
    <div className='story' style={{ backgroundImage: `url(${image})` }}>
        <div className='story__gradient'>
        </div>
        <Avatar className='story__avatar' src={userImage} />
        <h4 className='story__title'>{title}</h4>
    </div>
  )
}

export default Story