let date = new Date()
export const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']

export function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

export const CalendarData = [
    {
        day: Days[date.getDay()],
        date: date.getDate(),
        time: ['10:00', '11:00','12:00'],
        currentday: true,
        appointmenttime: null
    },
    {
        day: Days[(date.getDay()+1) % 7],
        date: addDays(date, 1).getDate(),
        time: ['08:00', '09:00','10:00'],
        currentday: false,
        appointmenttime: 1
    },
    {
        day: Days[(date.getDay()+2) % 7],
        date: addDays(date, 2).getDate(),
        time: ['12:00', '_____','13:00'],
        currentday: false,
        appointmenttime: null
    },
    {
        day: Days[(date.getDay()+3) % 7],
        date: addDays(date, 3).getDate(),
        time: ['10:00', '11:00','_____'],
        currentday: false,
        appointmenttime: 1
    },
    {
        day: Days[(date.getDay()+4) % 7],
        date: addDays(date, 4).getDate(),
        time: ['_____', '14:00','16:00'],
        currentday: false,
        appointmenttime: null
    },
    {
        day: Days[(date.getDay()+5) % 7],
        date: addDays(date, 5).getDate(),
        time: ['12:00', '12:00','14:00','15:00'],
        currentday: false,
        appointmenttime: 0
    },
    {
        day: Days[(date.getDay()+6) % 7],
        date: addDays(date, 6).getDate(),
        time: ['09:00', '10:00','11:00'],
        currentday: false,
        appointmenttime: 0
    },

]