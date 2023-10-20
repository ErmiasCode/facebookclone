import './Widgets.css'

import { Avatar } from '@mui/material'
import { Search } from '@mui/icons-material'

const contacts = [
  { src: 'https://images2.medimops.eu/product/5c3f8f/M03257061269-large.jpg', name: 'Paulo Coelho' },
  { src: 'https://m.media-amazon.com/images/I/81crXrGQjbL._SY522_.jpg', name: 'Dan Millman' },
  { src: 'https://m.media-amazon.com/images/I/81O1hT6FkSS._SY522_.jpg', name: 'Napoleon Hill' },
  { src: 'https://images.thalia.media/00/-/e2cc115b2e06409eacaf35c013ec869f/atomic-habits-taschenbuch-james-clear-englisch.jpeg', name: 'James Clear' },

  // { src: 'https://m.media-amazon.com/images/I/31jRv99FAgL._SY445_SX342_.jpg', name: 'Saygin Yalcin' },
  { src: 'https://images.thalia.media/00/-/a5841278bdb344e39a29795764cfadd3/money-master-the-game-taschenbuch-tony-robbins-englisch.jpeg', name: 'Tony Robbins' },
  { src: 'https://images.thalia.media/00/-/5b10ac2ce83741c4a81b170d98edc59c/the-4-hour-work-week-taschenbuch-timothy-ferriss-englisch.jpeg', name: 'Timothy Ferriss' },
  { src: 'https://m.media-amazon.com/images/I/51hyS-OoRUL._SY445_SX342_.jpg', name: 'Joseph Murphy' },
  { src: 'https://bilder.buecher.de/produkte/40/40155/40155015n.jpg', name: 'Joe Dispenza' },
  { src: 'https://m.media-amazon.com/images/I/61Mft52XTKS._SY522_.jpg', name: 'Tom Gerencer' },
  { src: 'https://images.thalia.media/00/-/8cdba65e8fa642bf89ed3368f0bc97de/influence-taschenbuch-robert-b-cialdini-englisch.jpeg', name: 'Robert B. Cialdini' },
  { src: 'https://m.media-amazon.com/images/I/41rgYfvXluL._SY445_SX342_.jpg', name: 'David Ogilvy' },
  { src: 'https://m.media-amazon.com/images/I/81+X34cXhQL._SY522_.jpg', name: 'Eric Ries' },
  { src: 'https://m.media-amazon.com/images/I/41gzoR8zyML._SY445_SX342_.jpg', name: 'Chris Voss' },
  { src: 'How to Win Friends and Influence People', name: 'Dale Carnegie' },
  { src: 'https://m.media-amazon.com/images/I/51Kwi70xx0L._SY522_.jpg', name: 'Robert Greene Tomas Santiago' },

  // { src: 'https://m.media-amazon.com/images/I/51Kwi70xx0L._SY522_.jpg', name: 'Tomas Santiago' },
  { src: 'https://bilder.buecher.de/produkte/35/35235/35235339n.jpg', name: 'Josh Kaufman' },
  { src: 'https://m.media-amazon.com/images/I/91L0La1pwDL._SY522_.jpg', name: 'Benjamin Graham' },
  { src: 'https://m.media-amazon.com/images/I/414F9AE6QIL._SY445_SX342_.jpg', name: 'Vadim Zeland' },
  { src: 'https://m.media-amazon.com/images/I/41bdMohftVL._SY445_SX342_.jpg', name: 'Richard H. Thaler' },
  { src: 'https://m.media-amazon.com/images/I/41WTyVQPbML._SY445_SX342_.jpg', name: 'G. Edward Griffin' },
  { src: 'https://m.media-amazon.com/images/I/81o9yYW3wDL._SY522_.jpg', name: 'Ron Chernow' },
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

      {contacts.map(contact => (
        <div key={contact.name} className="widgets__contact">
          <Avatar src={contact.src} alt={contact.name} />
          <div className='widgets__online'></div>
          <p>{contact.name}</p>
        </div>
      ))}

    </div>
  )
}

export default Widgets