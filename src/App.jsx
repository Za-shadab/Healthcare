import { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {Sidebardata} from '../src/data/sidebar'
import DashboardMain from './components/dashboard'
import History from './components/history/history'
import Calendar from './components/calendar/calendar'
import Appointments from './components/appointments/appointment'
import Statistics from './components/statistics/statistics'

function App() {
    useEffect(() => {
    document.title = "Dashboard | Health App";
  }, []);
  return (
     <div className='wrapper'>
        <div className='header'><Header/></div>
        <div className='container'>
          <div className='sidebar'><Sidebar sidebarprops={Sidebardata}/></div>
          <div className='main'>
            <Routes>
              <Route path='/' element={<DashboardMain/>}/>
              <Route path='/dashboard' element={<DashboardMain/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/appointments' element={<Appointments/>}/>
              <Route path='/statistics' element={<Statistics/>}/>
            </Routes>
          </div>
        </div>
     </div>
  )
}

export default App
