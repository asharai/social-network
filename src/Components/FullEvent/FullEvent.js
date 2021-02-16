import React from 'react';
import moment from "moment";
import './FullEvent.css';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';
import * as calendarActions from '../../store/actions/Calendar'
import {createMuiTheme} from "@material-ui/core";
const FullEvent = ({title,start,kind,description,onCloseFullEvent,img}) => {
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    })
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
            },
            [theme.breakpoints.between('xs','md')]: {
             right: '0px',
    },
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
                  <h4>{`${moment(start).format('dddd')} at ${moment(start).format('hh:mm')}`}</h4>
              </hgroup>
          </header>
            <img src={img?img:'https://lh3.googleusercontent.com/proxy/2-aTJa9-qAvmE2jxUAk8lxNL_yfSmrRyHkhiGpiesRo9Z7qV1Gyb0JeeCcE_XO_rFOt3z4_GY6qRlzazdrqD-XSQDXfeZ7hh2v4veA4e1du6NedZEoEgdgNXTiW5VYupB-foYho'} alt=""/>
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