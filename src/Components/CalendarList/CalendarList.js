import React from 'react';
import './CalendarList.css';
import {connect} from 'react-redux';
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import {formDate} from '../../store/reducers/Calendar';
import moment from "moment";
const CalendarList = ({events}) => {
    const fullDays = ['Sunday ','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const event = events.map(item=>{
        return (
            <CalendarEvent
            time={`${formDate(item.start.getHours())}:${formDate(item.start.getMinutes())}`}
            title={item.title}
            description={item.description}
            />
        )
    })
    return (
        <aside className="calendarList">
        <div className="calendarList__header">
            <h1>{moment().get('date')}</h1>
            <h2>{fullDays[moment().day()]}</h2>
            <p>{`${moment().get('month')+1},${moment().get('year')}`}</p>
        </div>
            <ul className="calendarList__items">
                {event}
            </ul>
        </aside>
    );
};
const mapStateToProps = state=>{
    return{
        events:state.calendar.events
    }
}
export default connect(mapStateToProps,null)(CalendarList);