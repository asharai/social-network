import React, {useEffect, useMemo, useRef} from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './Chat.css';
import {connect} from 'react-redux';
import * as chatActions from '../../store/actions/Chat'
import AddMessage from "../AddMessage/AddMessage";
import {getMessageTime} from '../../store/reducers/Chat'
const Chat = ({chat,open,id,friends,onCloseChat}) => {
    const idx = (id,arr)=>{
        return arr.findIndex(item=>{
            return item.id === id
        })
    }
    const divRef = useRef(null);




 const  messages = chat[idx(id,chat)].messages.map((item,i)=>{

        return (
            <li className={item.profile==160? 'chat_personMessage chat__message' : 'chat__message' } >
                {
                 i>0 &&  chat[idx(id,chat)].messages[i-1].profile===item.profile ?
                     <span className="chat__messageImg"></span> :
                     <img src={item.profile===160? 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' : friends[idx(item.profile,friends)].avatarImg} className="chat__messageImg" alt=""/>
                }
                <article>
                    <p className="chat__messageText">{item.text}</p>
                    {i==chat[idx(id,chat)].messages.length || chat[idx(id,chat)].messages[i+1]?.profile!=item.profile ?
                    <span className="chat__messageTime">{getMessageTime(item.time)}</span>  : null }

                </article>

            </li>
        )
    })


    useEffect(() => {
        divRef.current.scrollTop=9999;
        console.log(divRef.current)
    },[messages]);
    return (
        <div className={open ? "chat active" : 'chat'}>
            <header className="chat__header">
                <div className="chat__headerContainer">
                    <span className="chat__headerStatus"></span>
                    <h4 className="chat__headerTitle">Chat</h4>
                </div>
                <CloseIcon style={{cursor:'pointer'}} onClick={()=>onCloseChat()}/>

            </header>
            <div className="chat__body"  ref={divRef}>

                {messages}
            </div>
            <AddMessage idx={id} messagesLength={chat[idx(id,chat)].messages.length} />
        </div>
    )
};
const mapStateToProps = state =>{
    return{
        chat:state.chat.chat,
        open:state.chat.chatOpen,
        id:state.chat.idChat,
        friends:state.friends.friends
    }
}
const mapDispatchToProps=dispatch=>{
  return  {
        onCloseChat:()=>dispatch(chatActions.closeChat())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Chat);