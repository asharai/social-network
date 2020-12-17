import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import './CalendarEvent.css'
import {makeStyles} from "@material-ui/styles";
const CalendarEvent = ({time,title,description}) => {
    const useStyles = makeStyles({
        accordion: {
            border:'none',
            outline:'none',
            boxShadow:'none',
          '&:before':{
              backgroundColor:'#fff'
          }
        },
    });
    const classes = useStyles();
    return (
        <li className="calendarEvent">
           <h5>{time}</h5>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >

                    <h3 className="calendarEvent__title">{title}</h3>
                </AccordionSummary>
                <AccordionDetails  >
                    <p className="calendarEvent__text">
                        {description}
                    </p>
                </AccordionDetails>            </Accordion>

        </li>
    );
};

export default CalendarEvent;