import './App.css'
import {Navbar} from './components/Navbar'
import {Outlet} from 'react-router-dom'
import {Footer} from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <section style={{scrollBehavior:'smooth'}}>
        <Outlet/>
      </section>
      <Footer/>
    </>
  )
}

export default App
