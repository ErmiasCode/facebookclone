import './Sidebar.css'

import { useStateValue } from '../../config/StateProvider';

import { Bookmark, Chat, EmojiFlags, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'

import SidebarRow from '../SidebarRow'

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log("Why?",user.photoURL)

  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL} username={user.displayName} />
        <SidebarRow Icon={People} title='Friends' />
        <SidebarRow Icon={Chat} title='Messenger' />
        <SidebarRow Icon={VideoLibrary} title='Video' />
        <SidebarRow Icon={Bookmark} title='Save' />
        <SidebarRow Icon={EmojiFlags} title='Pages' />
        <SidebarRow Icon={Storefront} title='Marktplace' />
        <SidebarRow Icon={LocalHospital} title='COVID-19 Info Center' />
    </div>
  )
}

export default Sidebar