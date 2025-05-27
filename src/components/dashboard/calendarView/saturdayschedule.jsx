function SaturdaySchedule({saturdayappointment}) {
    return(
            <div className='saturdayappointmentwrapper' style={{marginTop:'2vh'}}>
                <h3 className='upcomingsubheading'>On Saturday</h3>
                <div className='upcomingappointmentcontainer'>
                    {
                        saturdayappointment.map((item)=>(
                            <div className='upcomingdiv upcomingdivsaturday'>
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

export default SaturdaySchedule