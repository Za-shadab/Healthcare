function AppointmentDetails({appointmentdata}) {
    return(
            <div className="appointmentdetailscontainer">
                {
                    appointmentdata.map((item)=>{
                        return(
                            <div className='appointment-wrapper'>
                                    <div className='drtype'>
                                        {item.drtype}
                                        <img src={item.image} alt="img" className={`aptdetailimage ${item.drtype === 'Physiotherapy Appointment' ? 'secondaptimage' : null}`}/>
                                    </div>
                                    <div className='drname'>
                                        <p className='aptlight'>{item.time}</p>
                                        <span className='aptlight'>{item.drname}</span>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AppointmentDetails