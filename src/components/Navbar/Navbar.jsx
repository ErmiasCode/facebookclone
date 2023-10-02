import './Navbar.css'

import { Avatar, Icon, IconButton } from '@material-ui/core'
import { Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png' alt='Facebook logo' height={50} />
            <div className='navbar__input'>
                <Search />
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>

        <div className='navbar__center'>
            <div className='navbar__option navbar__option--active'>
                <Home  fontSize='large' />
            </div>
            <div className='navbar__option'>
                <Flag fontSize='large' />
            </div>
            <div className='navbar__option'>
                <SubscriptionsOutlined fontSize='large' />
            </div>
            <div className='navbar__option'>
                <StorefrontOutlined fontSize='large' />
            </div>
            <div className='navbar__option'>
                <SupervisedUserCircle fontSize='large' />
            </div>
        </div>

        <div className='navbar__right'>
           {/* <IconButton color='primary'>
                <Add />
            </IconButton>
            <IconButton color='primary'>
                <Forum />
            </IconButton>
            <IconButton color='primary'>
                <NotificationsActive />
            </IconButton>  */}

            <div className="navbar__info">
                <Avatar />
            </div>
            
            {/* <IconButton color='primary'>
                <ExpandMore />
            </IconButton> */}
        </div>
    </div>
  )
}

export default Navbar