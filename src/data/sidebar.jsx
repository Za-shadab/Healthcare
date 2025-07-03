import DashboardIcon from '../assets/squares-2x2.svg?react'
import HistoryIcon from '../assets/Component 2 (1).svg?react'
import AppointmentIcon from '../assets/Component 3 (1).svg?react' 
import CalendarIcon from '../assets/Component 4 (1).svg?react'
import StatsIcon from '../assets/Component 5 (1).svg?react'
import ChatIcon from '../assets/Subtract.svg?react'
import PhoneIcon from '../assets/phone.svg?react'
import SettingsIcon from '../assets/Union.svg?react' 

export const Sidebardata = [
    {
        section : 'General',
        items : [
                {
                    title : 'Dashboard',
                    icon : <DashboardIcon size={24}/>,
                    path: '/dashboard'
                },
                {
                    title: 'History',
                    icon: <HistoryIcon size={48}/>,
                    path: '/history'
                },
                {
                    title: 'Calendar',
                    icon: <CalendarIcon/>,
                    path: '/calendar'
                },
                {
                    title: 'Appointments',
                    icon: <AppointmentIcon/>,
                    path: '/appointments'
                },
                {
                    title: 'Statistics',
                    icon: <StatsIcon/>,
                    path: '/statistics'
                },
        ]
    },
    {
        section : 'Tools',
        items : [
            {
                title : 'Chat',
                icon : <ChatIcon/>
            },
            {
                title : 'Support',
                icon : <PhoneIcon/>
            }
        ]
    },
    {
        section : '',
        items : [
            {
                title : 'Setting',
                icon : <SettingsIcon/>
            }
        ]
    }
]