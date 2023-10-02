import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
      <iframe 
        src="https://chat.openai.com/auth/login"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden"}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}

export default Widgets