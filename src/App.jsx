import './App.css'

import { useStateValue } from './config/StateProvider'

import Feed from './components/Feed'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
      <div className='app'>
        {!user ? <Login /> : (
          <>
            <Navbar />
            <div className='app__body'>
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}

        {/* Footer */}
      </div>
  )
}

export default App
