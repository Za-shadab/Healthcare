import Arrowright from '../../../assets/Component 6.svg?react'
import Arrowleft from '../../../assets/Component 7.svg?react'
import AppointmentDetails from './appointmentdetails';
import './calendar.css'
import SaturdaySchedule from './saturdayschedule';
import UpcomingSchedule from './upcomingschedule';


function hasconsectiveAppointment(calendardata, item, dayindex, timeindex){
    const hasnextday = dayindex + 1 < calendardata.length;
    const nextday = calendardata[dayindex + 1]
    const hasprevday = dayindex -1 >= 0;
    const prevday = calendardata[dayindex - 1]

    const hasnextappointment = hasnextday && item.appointmenttime !==null && item.appointmenttime == timeindex && !item.currentday && item.appointmenttime === nextday.appointmenttime

    const hasprevappointment = prevday && item.appointmenttime !==null && item.appointmenttime == timeindex && !item.currentday && item.appointmenttime === prevday.appointmenttime

    if(hasnextappointment){
        return 'consecutiveappt'
    }else{
        return null
    }
}

function CalendarView({calendardata, appointmentdata, thursdayappointment, saturdayappointment}){
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return(
        <div className="calendarviewwrapper">
            <div className="calendarcontainer">
                <div className="calendarheading">
                    <span>{months[date.getMonth()]} {date.getFullYear()}</span>
                    <span>
                        <Arrowleft/>
                        <Arrowright style={{marginLeft:'10px'}}/>
                    </span>
                </div>
                <div className="calendardays">
                    {
                        calendardata.map((item, dayindex)=>(
                                <div key={dayindex} className="days" style={{backgroundColor: item.currentday && '#ECF3FE'}}>
                                    <p>{item.day}</p>
                                    <p style={{fontSize:'24px'}}>{item.date}</p>
                                    <div className="appttime">
                                        {
                                            item.time.map((time, timeindex)=>(
                                                <div className={
                                                        hasconsectiveAppointment(calendardata, item, dayindex, timeindex)                                                        
                                                    }>
                                                <div key={timeindex} className={`timediv ${item.appointmenttime !==null && item.appointmenttime == timeindex && item.currentday ? 'selectedtime' : null}
                                                ${item.appointmenttime !==null && item.appointmenttime == timeindex && !item.currentday
                                                    ? 'futuretime' : null
                                                }`}>
                                                    <div>
                                                        {time || ''}
                                                    </div>
                                                    <div className={
                                                        `${item.appointmenttime !==null && item.appointmenttime == timeindex && !item.currentday
                                                            ? 'calendardot' : null}`
                                                        }></div>
                                                </div>
                                                </div>
                                            ))
                                        }
                                    </div>                                    
                                </div>
                            )
                        )
                    }
                </div>
            </div>

            <AppointmentDetails appointmentdata={appointmentdata}/>
            <UpcomingSchedule thursdayappointment={thursdayappointment}/>
            <SaturdaySchedule saturdayappointment={saturdayappointment}/>
        </div>
    )
}

export default CalendarView