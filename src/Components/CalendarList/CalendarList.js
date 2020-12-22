import React from 'react';
import './CalendarList.css';
import {connect} from 'react-redux';
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import {formDate} from '../../store/reducers/Calendar';
import moment from "moment";
const CalendarList = ({events}) => {
    const fullDays = ['Sunday ','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const event = events.filter(item=>{
        console.log(moment(item.start).toDate())
        return moment(item.start).format("MMM Do YY") === moment().format("MMM Do YY")
    }).map(item=>{
        return (
            <CalendarEvent

                time={`${formDate(moment(item.start).format("h"))}:${formDate(moment(item.start).format("mm"))}`}
            title={item.title}
            description={item.description}
            />
        )
    })
    const contentEvents= event.length > 0  ?(    <ul className="calendarList__items">
        {event}
    </ul>) : <h1 style={{textAlign:'center',paddingTop:'10px'}}>No tasks for today</h1>
    return (
        <aside className="calendarList">
        <div className="calendarList__header">
            <h1>{moment().get('date')}</h1>
            <h2>{fullDays[moment().day()]}</h2>
            <p>{`${(moment()).format('MMMM')}, ${moment().get('year')}`}</p>
        </div>
            {contentEvents}
        </aside>
    );
};
const mapStateToProps = state=>{
    return{
        events:state.calendar.events
    }
}
export default connect(mapStateToProps,null)(CalendarList);