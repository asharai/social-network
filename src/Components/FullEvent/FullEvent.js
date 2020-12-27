import React from 'react';
import moment from "moment";
import './FullEvent.css'
const FullEvent = ({title,start,kind,description}) => {

    return (
        <div className="fullEvent">
          <header className="fullEvent__header">
              <img src="https://html.crumina.net/html-olympus/img/avatar77-sm.jpg" alt=""/>
              <hgroup>
                  <h1>{title}</h1>
                  <h4>{moment(start).format('dddd')}</h4>
              </hgroup>
          </header>
            <img src="https://images.unsplash.com/photo-1601174375954-a5e48aea8531?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""/>
            <article>
                <p className="fullEvent__description">{description}</p>
                <ul>
                    <li><h4>{kind}</h4></li>
                    <li>{`${moment(start).format('MMM DD,  yyyy')} at ${moment(start).format('hh:mm')}`}</li>
                </ul>
            </article>
        </div>
    );
};

export default FullEvent;