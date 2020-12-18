import React, {useState} from 'react';
import './CreateCalendarEvent.css'
import TextField from "@material-ui/core/TextField";
import  {makeStyles} from "@material-ui/core/styles";
import MomentUtils from '@date-io/moment';
import {connect} from 'react-redux';
import * as calendarActions from '../../store/actions/Calendar'
import CloseIcon from '@material-ui/icons/Close';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';
const CreateCalendarEvent = ({onCloseModalCalendar}) => {
    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
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
        <div className="createCalendarEvent ">
            <CloseIcon className={classes.close} onClick={()=>onCloseModalCalendar()}/>
        <h3>Create Event</h3>
        <form className="createCalendarEvent__form">

            <TextField id="outlined-basic" label="Event Name" variant="outlined" style={{  backgroundColor:'#fff'}} className={classes.formItem}/>
            <TextField id="outlined-basic" label="Event Location" variant="outlined" />
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Event Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Event Time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}/>
            </MuiPickersUtilsProvider>


            <TextField
                id="outlined-multiline-static"
                label="Event Location"
                multiline
                rows={4}

                variant="outlined"
            />
            <button className="createCalendarEvent__btn">Create Event</button>
        </form>
        </div>
    );
};
const mapDispatchToProps = dispatch =>{
    return{
        onCloseModalCalendar:()=>dispatch(calendarActions.closeModalCalendar())
    }
}
export default connect(null,mapDispatchToProps)(CreateCalendarEvent);