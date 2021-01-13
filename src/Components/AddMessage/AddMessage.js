import React, {useEffect, useState} from 'react';
import './AddMessage.css';
import SendIcon from '@material-ui/icons/Send';
import {makeStyles} from "@material-ui/core/styles";
import * as chatActions from '../../store/actions/Chat'
import {connect} from 'react-redux';
const AddMessage = ({idx,messagesLength,onAddMessage}) => {
    const [text,setText]=useState('');
    useEffect(()=>{
        setText('')
    },[idx])
    const useStyles = makeStyles({
        root: {
            position:"absolute",
            right:'15px',
            bottom:'20px',
            cursor:'pointer',
            '&:hover':{
                color:'#7c5ac2'
            }
        },

    });
    const classes =useStyles();
    const message = {
        id:messagesLength+1,
        text: text,
        time:Date.now(),
        profile:160,
    }
    const sendMessage = ()=>{
        if(text.length!=0){
            onAddMessage(idx,message);
            setText('');
        }
    }
    const handleKeyPress = (event) => {

        if(event.key == 'Enter'){
            event.preventDefault()
            sendMessage()
        }
    }
    return (
        <article className="addMessage" onKeyPress={handleKeyPress}>
            <textarea placeholder="Type your message here..." value={text} onChange={(e)=>setText(e.target.value)}>

            </textarea>
            <SendIcon className={classes.root} onClick={()=>{
                sendMessage();
            }}/>
        </article>
    );
};
const mapDispatchToProps = dispatch =>{
    return{
        onAddMessage:(id,message)=>dispatch(chatActions.addMessage(id,message))
    }
}
export default connect(null,mapDispatchToProps)(AddMessage);