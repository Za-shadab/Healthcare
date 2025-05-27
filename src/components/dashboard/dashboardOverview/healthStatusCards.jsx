import { ArrowRight } from 'lucide-react';
import './dashboardOverview.css'

function HealthStatusCards({healthcarddata}) {
    return(
        <div className="healthindicatorwrapper">
            <div>
                {
                    healthcarddata.map((item)=>{
                        return(
                            <div className="healthindicatorcontainer" key={item.title}>
                                <div>
                                    <img src={item.image} alt={item.title} className='oragansimage'/>
                                    <p>{item.title}</p>
                                </div>
                                <span style={{color: '#D7DAE0', fontSize:'14px'}}>
                                    Date:{
                                        item.date
                                    }
                                </span>
                                <div className="progress">
                                    <div style={{width:`${item.progress}`, backgroundColor:`${item.progresscolor}`, borderRadius:'20px'}}>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="details">
                    <p>Details <ArrowRight size={14} className='arrow-para'/></p>
                </div>
            </div>
        </div>
    )
}

export default HealthStatusCards