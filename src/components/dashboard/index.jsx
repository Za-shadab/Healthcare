import AnatomySection from "./dashboardOverview/anatomySection";
import HealthStatusCards from "./dashboardOverview/healthStatusCards"
import {healthstatusData} from "../../data/healthstatus"
import { ChevronDown, ArrowRight } from 'lucide-react';
import './dashboardmain.css'
import CalendarView from "./calendarView";
import { CalendarData } from "../../data/calenddata";
import {Appointmentdetails, ThursdayAppointment, SaturdayAppointment} from "../../data/appointmentdetails"
import {BarchartData} from '../../data/activitydata'
import ActivityFeed from "./activityFeed";


function DashBoardMain() {
    return(
        <div className="dashboardmainwrapper">

            <div className="componentwrapper">
            <div className="headingcontainer">
                <h2>Dashboard</h2>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <span>This Week</span>
                    <ChevronDown color="#3633A6"/>
                </div>
            </div>
                <div>
                    <div className="componentmaincontainer">
                    <AnatomySection/>
                    <HealthStatusCards healthcarddata={healthstatusData}/>
                </div>
                    <ActivityFeed activitydata={BarchartData}/>
                <div>
                </div>
                </div>
            </div>
                <div>
                    <CalendarView calendardata={CalendarData} appointmentdata={Appointmentdetails} thursdayappointment={ThursdayAppointment} saturdayappointment={SaturdayAppointment}/>
                </div>
        </div>
    )
}

export default DashBoardMain