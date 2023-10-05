import { Search, VideoCall } from '@material-ui/icons'
import './Widgets.css'

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Mark Zuckerberg' },
  { src: 'https://links.papareact.com/snf', name: 'Harry Potter' },
  { src: 'https://links.papareact.com/d0c', name: 'The Queen' },
  { src: 'https://links.papareact.com/6gg', name: 'James Bond' },
  { src: 'https://links.papareact.com/r57', name: 'Batman' },
]

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2 className='title'>Contacts</h2>
        <div className="widgets__headerIcons">
          <Search className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Widgets

      {/* <iframe 
        src="https://chat.openai.com/auth/login"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden"}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe> */}