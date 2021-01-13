import React, {useState} from 'react';
import './CreateCalendarEvent.css'
import TextField from "@material-ui/core/TextField";
import  {makeStyles} from "@material-ui/core/styles";
import MomentUtils from '@date-io/moment';
import {connect} from 'react-redux';
import moment from "moment";
import * as calendarActions from '../../store/actions/Calendar'
import CloseIcon from '@material-ui/icons/Close';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
const CreateCalendarEvent = ({onCloseModalCalendar,onAddEventToCalendar,events}) => {
    const [selectedDate, setSelectedDate] = useState(Date.now());
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

   const [event,setEvent]=useState({'kind':'','title':'',allDay:false,
       'start': moment(selectedDate?._d).toDate(),
       'end':moment(selectedDate?._d).toDate(),
       'id':events[events.length-1].id+1,
       'description':'',location:''});


    const addEventToList = (e)=>{
        e.preventDefault();
        onAddEventToCalendar(event);

    }
   
    return (
        <div className="createCalendarEvent ">
            <CloseIcon className={classes.close} onClick={()=>onCloseModalCalendar()}/>
        <h3>Create Event</h3>
        <form className="createCalendarEvent__form" onSubmit={addEventToList}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple" >Kind</InputLabel>
                <Select
                    native
                    value={event.kind}
                    onChange={(e)=>setEvent({...event,kind:e.target.value})}
                    label="Age"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'Personal Event'}>Personal Event</option>
                    <option value={'Private Event'}>Private Event</option>

                </Select>
            </FormControl>

            <TextField id="outlined-basic" label="Event Name" variant="outlined" value={event.title} onChange={(e)=>setEvent({...event,title:e.target.value})} className={classes.formItem}/>
            <TextField id="outlined-basic" label="Event Location" variant="outlined" value={event.location} onChange={(e)=>setEvent({...event,location:e.target.value})} />
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Event Date"
                value={event.start}
                autoOk
                onChange={(e)=>setEvent({...event,start:new Date(e?._d),end:new Date(e?._d)})}
                KeyboardButtonProps={{
                    'aria-label': 'change date',

                }}
            />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Event Time"
                    value={event.start}
                    autoOk
                    onChange={(e)=>setEvent({...event,start:new Date(e?._d),end:new Date(e?._d)})}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',

                    }}/>

            </MuiPickersUtilsProvider>


            <TextField
                id="outlined-multiline-static"
                label="Event Description"
                multiline
                rows={4}
                value={event.description}
                onChange={(e)=>setEvent({...event,description:e.target.value})}
                variant="outlined"

            />
            <button className="createCalendarEvent__btn">Create Event</button>
        </form>
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        events:state.calendar.events,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onCloseModalCalendar:()=>dispatch(calendarActions.closeModalCalendar()),
        onAddEventToCalendar:(event)=>dispatch(calendarActions.addEventToCalendar(event))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCalendarEvent);