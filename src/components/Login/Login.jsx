import { Button } from '@material-ui/core'
import "./Login.css"

import { auth, provider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png" 
          alt="Facbook Logo"
        />
        <div className='login__logoText'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
            alt="Facbook Text Logo"
            height={30}
          />
        </div>
      </div>

      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login