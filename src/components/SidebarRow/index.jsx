import './SidebarRow.css'

import { Avatar } from '@mui/material'

const SidebarRow = ({src, username, Icon, title}) => {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src} alt='' />}
        {Icon && <Icon />}
        {username && <h4 style={{color: "white"}}>{username}</h4>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow