import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import './CalendarEvent.css'
const CalendarEvent = ({time,title,description}) => {
    return (
        <li className="calendarEvent">
           <h5>{time}</h5>
            <Accordion style={{border:'none',outline:'none',boxShadow:'none',backgroundColor:'#fff'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <h3>{title}</h3>
                </AccordionSummary>
                <AccordionDetails  >
                    <p>
                        {description}
                    </p>
                </AccordionDetails>            </Accordion>

        </li>
    );
};

export default CalendarEvent;