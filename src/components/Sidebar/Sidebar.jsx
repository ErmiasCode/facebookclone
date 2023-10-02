import { Bookmark, Chat, EmojiFlags, LocalHospital, People, Save, Storefront, VideoLibrary } from '@material-ui/icons'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
        <SidebarRow Icon={People} title='Friends' />
        <SidebarRow Icon={Chat} title='Messenger' />
        <SidebarRow Icon={VideoLibrary} title='Video' />
        <SidebarRow Icon={Bookmark} title='Save' />
        <SidebarRow Icon={EmojiFlags} title='Pages' />
        <SidebarRow Icon={Storefront} title='Marktplace' />
        <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
    </div>
  )
}

export default Sidebar