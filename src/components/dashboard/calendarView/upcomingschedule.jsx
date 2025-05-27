function UpcomingSchedule({thursdayappointment}) {
    return(
            <div className='upcomingappointmentwrapper'>
                <h2 className='upcomingheading'>The Upcoming Schedule</h2>
                <h3 className='upcomingsubheading'>On Thursday</h3>
                <div className='upcomingappointmentcontainer'>
                    {
                        thursdayappointment.map((item)=>(
                            <div className='upcomingdiv'>
                                <div className='checkuptype'>
                                    {item.checkuptype}
                                    <img src={item.image} alt="img" style={{width: '10%'}}/>
                                </div>
                                <div className='checkuptime'>
                                    {item.time}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default UpcomingSchedule