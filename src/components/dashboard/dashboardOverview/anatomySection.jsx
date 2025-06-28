import human from '../../../assets/human2.png'
import heart from '../../../assets/heart.png'
import leg from '../../../assets/leg.png'
import { ZoomIn } from 'lucide-react';
import './dashboardOverview.css'
import { useState, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP } from '@gsap/react';
import DynamicModal from '../../Modal';



function AnatomySection(){
    const [opacity, setOpacity] = useState(false)
    const [opacityOne, setopacityOne] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [description, setDescription] = useState('')

    const [xValue, setXvalue] = useState(0);
    const [yValue, setYvalue] = useState(0);

    const indicatorRef = useRef(null);
    const indicatorRefOne = useRef(null);
    let date = new Date()
    const Days = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']

    useGSAP(()=>{   
            gsap.to(indicatorRef.current, {
                x: xValue,
                y: yValue,
                duration: 0.2,
                ease: "power2"
            });
    },[xValue, yValue])
    useGSAP(()=>{
            gsap.to(indicatorRefOne.current, {
                x: xValue,
                y: yValue,
                duration: 0.5,
                ease: "power2"
            });
    },[xValue, yValue])

    function handlePosition(element, e){
        const rect = element.current.getBoundingClientRect();
        if(e.currentTarget.classList.contains('first')){
            setXvalue(e.clientX - (rect.left/2))
            setYvalue(e.clientY - (rect.top/2))
        }
        if(e.currentTarget.classList.contains('second')){
            setXvalue(e.clientX - (rect.left * 1.8))
            setYvalue(e.clientY - (rect.top /4))
        }
        
    }

    return(
        <div className='humanwrapper'>   
                <DynamicModal open={open} handleClose={handleClose} description={description}/>
            <div className='humangrid'>
                <div className='humancontainer'>
                    <img src={human} alt='human-image' id='humanimage'/>
                    <ZoomIn color='#898F98'/>
                </div>
                <div className='sacnnerwrapper first' 
                onMouseMove={(e)=>{handlePosition(indicatorRef, e)}} 
                onMouseEnter={()=>{setOpacity(true)}} 
                onMouseLeave={()=>{setOpacity(false)}}
                onClick={()=>{
                    handleOpen()
                    setDescription("Your Heart is healthy")
                }}
                >
                    <div className='scannercontainer'><div><div></div></div></div>
                </div>
                <div className='sacnnerwrapper second' 
                onMouseMove={(e)=>{handlePosition(indicatorRefOne, e)}} 
                onMouseEnter={()=>{setopacityOne(true)}} 
                onMouseLeave={()=>{setopacityOne(false)}}
                onClick={()=>{
                    handleOpen()
                    setDescription("Your Leg is healthy")
                }}
                >
                    <div className='scannercontainer'><div><div></div></div></div>
                </div>

                <div className={`anatomy-indicator ${opacity ? 'active' : 'inActive'}`} ref={indicatorRef}>
                    <img src={heart} alt='heart'/>
                    <span>Healthy Heart</span>
                </div>
                <div className={`anatomy-indicator secondorgan ${opacityOne ? 'active' : 'inActive'}`} ref={indicatorRefOne}>
                    <img src={leg} alt='heart'/>
                    <span>Healthy leg</span>
                </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}
export default AnatomySection

