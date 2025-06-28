import './activity.css'

function ActivityFeed({activitydata}){
    return(
        <div className='activitywrapper'>
            <div className='activityheading'>
                <p style={{fontSize:'18px', fontWeight:'bold', color:'#2B2985'}}>Activity</p>
                <p style={{color:'#c2c3c7', fontWeight:'medium'}}>3 appointment on this week</p>
            </div>

            <div className='barcontainer'>
                <div className='bardivscontainer'>
                    {
                    activitydata.map((separatedivs, i)=>(
                        <div className='bardivs' key={i}>
                            {
                                separatedivs.bars.map((bar, barindex)=>(
                                    <div
                                        key={barindex+1}
                                        className={`bars ${bar.type}`}
                                        style={{backgroundColor: (bar.type !== 'smallmidpartbar' && bar.type !== 'fullmidpartbar' && bar.bgcolor), ...(bar.bgcolor === '' && {'--after-bg':'#1DD7E4', '--before-bg': '#3734A7'}), ...(bar.grey && {'--after-bg':'#E2E5ED', '--before-bg': '#E2E5ED'})}}
                                    >
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                </div>
                <div className='dayscontainer'>
                {
                    activitydata.map((eachday, i)=>(
                        eachday.day!=='' && <div key={i}>
                            {eachday.day}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed