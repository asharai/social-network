import React from 'react';
import './Calendar.css'
import CalendarList from "../../Components/CalendarList/CalendarList";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import {connect} from 'react-redux'
import {Modal} from "@material-ui/core";
import CreateCalendarEvent from "../../Components/CreateCalendarEvent/CreateCalendarEvent";
import {makeStyles} from "@material-ui/core/styles";
import FullEvent from "../../Components/FullEvent/FullEvent";
import * as calendarActions from '../../store/actions/Calendar'
const Calendars = ({events,modalCalendar,eventDescription,onOpenEvent,activeId}) => {

    const localizer = momentLocalizer(moment);
    const useStyles = makeStyles({
        root: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
    });
    const classes = useStyles();

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
                        step={60}
                        length={0.5}
                        onView={() => {}}
                        defaultDate={new Date(Date.now())}
                         onSelectEvent={(e)=>onOpenEvent(e.id)}
                    />

                </div>
            </div>
            <Modal open={modalCalendar} className={classes.root} disableScrollLock>
                <CreateCalendarEvent/>
            </Modal>
            <Modal open={eventDescription} className={classes.root} disableScrollLock>
            <FullEvent {...events[activeId]} />
            </Modal>
        </div>
    );
};
const mapStateToProps = state=>{
    return{
        events:state.calendar.events,
        modalCalendar:state.calendar.modalCalendar,
        eventDescription:state.calendar.eventDescription,
        activeId:state.calendar.activeId
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onOpenEvent:(id)=>dispatch(calendarActions.openEvent(id))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Calendars);