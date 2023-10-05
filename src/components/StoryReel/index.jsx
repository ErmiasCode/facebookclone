import Story from '../Story'
import './StoryReel.css'

const StoryReel = () => {
  return (
    <div className='storyReel'>
        <Story 
            image="https://th.bing.com/th/id/OIG.oxkD0VI6Y0tiVSwepbFg?pid=ImgGn" 
            userImage="https://th.bing.com/th/id/OIG.clFWypiTpfTZP5R.SRBP?pid=ImgGn" 
            title="Beautiful Destination" 
        />
        <Story 
            image="https://th.bing.com/th/id/OIG.phK7P_RuYImBBCun83tY?pid=ImgGn"
            userImage="https://th.bing.com/th/id/OIG.FVYFSx6.wMhj0tULsMa5?pid=ImgGn"
            title="Coca Cola Winter Edition" 
        />
        <Story 
            image="https://th.bing.com/th/id/OIG.X8g0Dntxr4ZSQpyXoBE_?pid=ImgGn" 
             
            userImage="https://avatars.githubusercontent.com/u/25126281?v=4" 
            title="Background Story" 
        />
        <Story 
            image="https://th.bing.com/th/id/OIG.DxwG7jlTJSRbrPeDSwAY?pid=ImgGn" 
            userImage="https://th.bing.com/th/id/OIG.MhbXcI7nnnO_jLkF3t0A?pid=ImgGn" 
            title="Background Story" 
        />
        <Story 
            image="https://th.bing.com/th/id/OIG.rGUnw2k9BkfctG7ah0Z1?pid=ImgGn" 
            userImage="https://th.bing.com/th/id/OIG.WhMqLfXNcFP6CDSv6796?pid=ImgGn" 
            title="Background Story" 
        />
    </div>
  )
}

export default StoryReel