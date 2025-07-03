import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Card, CardDescription, CardFooter, CardHeader } from '../ui/card'
import { addDays, Days } from '@/data/calenddata'
import eventPinIcon from '@/assets/pin.png'

const date = new Date()
const events = [
  { title: 'Appointment1', start: date, eventColor:'bg-cyan-500/50'},
  { title: 'Appointment2', start: addDays(date, 1), eventColor:'bg-violet-600/50' },
  { title: 'Appointment2', start: addDays(date, 4), eventColor:'bg-blue-600/50' },
  { title: 'Appointment2', start: addDays(date, 6), eventColor:'bg-red-600/50' },
  { title: 'Appointment2', start: addDays(date, 2), eventColor:'bg-orange-600/50' }
]

function Calendar(){
    return(
        <div className='w-full h-full flex justify-between'>
            <div className='w-2/3 px-10 py-5' style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                <FullCalendar
                    
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    weekends={false}
                    events={events}
                    eventContent={renderEventContent}
                />
            </div>
            <div className='h-full w-[25vw] flex flex-col gap-6 px-7 py-5'>
                <div className='flex gap-2 mb-5'>
                    <img src={eventPinIcon} className='w-10 h-10'/>
                    <h1 className='text-3xl text-gray-600'>Events</h1>
                </div>
                {
                    events.map(el=>(
                            <Card className={`w-[90%] shadow-xl border border-transparent ${el.eventColor} px-2 py-3 cursor-pointer`}>
                                <CardHeader className=''>
                                    <CardDescription className='text-2xl overflow-hidden inline truncate text-amber-50'>{el.start.getDate()} {el.title}</CardDescription>
                                    <CardDescription className="text-xl text-amber-50">{el.start.toLocaleTimeString()}</CardDescription>
                                </CardHeader>
                            </Card>
                    ))
                }
            </div>
        </div>
    )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Calendar