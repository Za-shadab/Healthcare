import './header.css'
import { Search, Bell } from 'lucide-react';
import avt from '../../assets/av1-removebg-preview.png'

function Header() {
    return(
        <div className='header-wrapper'>
            <div className='logocontainer'>
                <span className='logo'>Health</span>
                <span className='logo-care'>care.</span>
            </div>
            <div className='search-wrapper'>
                <div className='search'>
                    <Search size={18} color='#1A1F1F'/>
                    <input name='search' placeholder='Search' className='search-input'/>
                </div>
                <div className='bellcontainer'>
                    <Bell fill='#3633A6' stroke='#3633A6'/>
                </div>
            </div>
            <div className='profilecontainer'>
                <div className='imgcontainer'>
                    <img src={avt} alt='avt'/>
                </div>
                <div className='addcontainer'><span>+</span></div>
            </div>
        </div>
        
    )
}

export default Header