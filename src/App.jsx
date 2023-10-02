import './App.css'

import Feed from './components/Feed/Feed'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets'

function App() {
  const user = null
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
