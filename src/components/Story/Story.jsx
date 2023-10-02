import { Avatar } from '@material-ui/core'
import './Story.css'

const Story = ({ imge, userImage, title }) => {
  return (
    <div className='story' style={{ backgroundImage: `url(${userImage})` }}>
        <Avatar className='story__avatar' src={userImage} />
        <h4>{title}</h4>
    </div>
  )
}

export default Story