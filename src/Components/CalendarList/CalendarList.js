import React from 'react';
import './CalendarList.css';
import {connect} from 'react-redux'
const CalendarList = () => {
    return (
        <aside className="calendarList">
        <div className="calendarList__header">
            <h1>15</h1>
            <h2>Saturday</h2>
            <p>March,2016</p>
        </div>
        </aside>
    );
};

export default connect(null,null)(CalendarList);