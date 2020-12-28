import React from 'react';
import moment from "moment";
import './FullEvent.css';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';
import * as calendarActions from '../../store/actions/Calendar'
const FullEvent = ({title,start,kind,description,onCloseFullEvent}) => {
    const useStyles = makeStyles({

        close:{
            position:'absolute',
            right:'-25px',
            top:'-30px',
            color:'lightgray',
            fontSize:'30px',
            cursor:'pointer',
            transition:'all 0.3s',
            '&:hover':{
                color:'#ff5e3a'
            }
        }
    });

    const classes = useStyles();
    return (
        <div className="fullEvent">
            <CloseIcon className={classes.close} onClick={()=>onCloseFullEvent()}/>
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
const mapDispatchToProps = dispatch=>{
    return{
        onCloseFullEvent:()=>dispatch(calendarActions.closeModalEvent())
    }
}
export default connect(null,mapDispatchToProps)(FullEvent);