import React from 'react';
import './Calendar.css'
import CalendarList from "../../Components/CalendarList/CalendarList";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment'
import {connect} from 'react-redux'
const Calendars = ({events}) => {
    console.log(events)
    const localizer = momentLocalizer(moment)
    return (
        <div className="calendar">
            <header className="calendar__header">
                <div className="calendar__headerOverlay">
                    <article className="calendar__headerContent">
                        <div>
                            <h1>Create and Manage Events</h1>
                            <p>Welcome to your personal planner assistant. Here you’ll see all your next events and invites that your friends sent you. You can create 3 different types of events: Personal (for your daily errands), Private (for you and friends only) and Public (open to everyone). Create your events, invite friends and have fun!</p>
                        </div>
                        <img src="https://html.crumina.net/html-olympus/img/event-bottom.png" alt="" className="calendar__headerContentImg"/>

                    </article>
                </div>
                <div className="calendar__headerBackground"></div>
            </header>
            <div className="calendar__container">
                <h4 className="calendar__containerTitle">Calendar and Events</h4>
                <div className="calendar__containerContent">
                    <CalendarList/>
                    <Calendar
                        style={{height:'800px',width:'80%'}}
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        onView={() => {}}
                        date={new Date(Date.now())}
                    />

                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state=>{
    return{
        events:state.calendar.events
    }
}
export default  connect(mapStateToProps,null)(Calendars);