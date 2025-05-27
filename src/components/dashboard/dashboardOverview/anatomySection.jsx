import human from '../../../assets/human2.png'
import heart from '../../../assets/heart.png'
import leg from '../../../assets/leg.png'
import { ZoomIn } from 'lucide-react';
import './dashboardOverview.css'

function AnatomySection(){
    return(
        <div className='humanwrapper'>   
            <div className='humancontainer'>
                <img src={human} alt='human-image' id='humanimage'/>
                <ZoomIn color='#898F98'/>
            </div>
            <div className='sacnnerwrapper'>
                <div className='scannercontainer'><div><div></div></div></div>
            </div>
            <div className='sacnnerwrapper second'>
                <div className='scannercontainer'><div><div></div></div></div>
            </div>
            <div className='anatomy-indicator'>
                <img src={heart} alt='heart'/>
                <span>Healthy Heart</span>
            </div>
            <div className='anatomy-indicator secondorgan'>
                <img src={leg} alt='heart'/>
                <span>Healthy leg</span>
            </div>
            
        </div>
    )
}
export default AnatomySection