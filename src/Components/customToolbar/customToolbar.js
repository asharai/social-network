import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './customToolbar.css'
export default class CalendarToolbar extends Toolbar {

    componentDidMount() {
        const view = this.props.view;
        console.log(view)
    }

    render() {

        return (
            <ul className="customToolbar">

                <li className="rbc-btn-group">
                    <ArrowBackIosIcon className="customToolbar__arrow" onClick={() => this.navigate('PREV')} />
                    <h3 >{this.props.label} </h3>
                    <ArrowForwardIosIcon className="customToolbar__arrow" onClick={() => this.navigate('NEXT')}/>

                </li>
                <li className={this.props.view=='month'?"customToolbar__item activeView" : "customToolbar__item"  } onClick={this.view.bind(null, 'month')}><img src="https://html.crumina.net/html-olympus/svg-icons/month-calendar-icon.svg" alt=""/></li>
                <li className={this.props.view=='week'?"customToolbar__item activeView" : "customToolbar__item"  }   onClick={this.view.bind(null, 'week')}><img src="https://html.crumina.net/html-olympus/svg-icons/week-calendar-icon.svg" alt=""/></li>
                <li className={this.props.view=='day'?"customToolbar__item activeView" : "customToolbar__item"  }  onClick={this.view.bind(null, 'day')}><img src="https://html.crumina.net/html-olympus/svg-icons/day-calendar-icon.svg" alt=""/></li>

            </ul>
        );
    }
}