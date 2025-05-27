import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {Sidebardata} from '../src/data/sidebar'
import DashboardMain from './components/dashboard'

function App() {

  return (
     <div className='wrapper'>
        <div className='header'><Header/></div>
        <div className='container'>
          <div className='sidebar'><Sidebar sidebarprops={Sidebardata}/></div>
          <div className='main'><DashboardMain/></div>
        </div>
     </div>
  )
}

export default App
