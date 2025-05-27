import teeth from '../assets/healthindicators/tooth.png'
import arm from '../assets/healthindicators/muscle (2).png'
import syringe from '../assets/syringe.png'
import eye from '../assets/eye.png'
import heart from '../assets/heart.png'
import doctor from '../assets/doctor.png'

export const Appointmentdetails = [
    {
        drtype: 'Dentist',
        image: teeth,
        time: '09:00-11:00',
        drname: 'Dr. Cameron Williamson'
    },
    {
        drtype: 'Physiotherapy Appointment',
        image: arm,
        time: '09:00-11:00',
        drname: 'Dr. kevin Djones'
    }
]

export const ThursdayAppointment = [
    {
        checkuptype: 'Health checkup complete',
        image: syringe,
        time: '11:00 AM'
    },
    {
        checkuptype: 'Opthalmologist',
        image: eye,
        time: '14:00 PM'
    }
]


export const SaturdayAppointment = [
    {
        checkuptype: 'Cardiologist',
        image: heart,
        time: '11:00 AM'
    },
    {
        checkuptype: 'Neurologist',
        image: doctor,
        time: '14:00 PM'
    }
]