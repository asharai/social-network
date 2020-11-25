import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './Chat.css';
import {connect} from 'react-redux';
const Chat = ({chat,open,id,friends}) => {
    const messages = chat[id].messages.map(item=>{
        console.log(item)
        return (
            <li className={item.profile==160? 'chat_personMessage chat__message' : 'chat__message'}>

                <img src={item.profile==160? 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' :friends[item.profile].avatarImg} className="chat__messageImg" alt=""/>
                <p className="chat__messageText">{item.text}</p>
            </li>
        )
    })
    const chatContent = open ? (<div className="chat">
        <header className="chat__header">
            <div className="chat__headerContainer">
                <span className="chat__headerStatus"></span>
                <h4 className="chat__headerTitle">Chat</h4>
            </div>
            <CloseIcon/>
        </header>
        <div className="chat__body">
            {messages}
        </div>
        <div className="chat__addMessage"></div>
    </div>) : null;

    return chatContent
};
const mapStateToProps = state =>{
    return{
        chat:state.chat.chat,
        open:state.chat.chatOpen,
        id:state.chat.idChat,
        friends:state.friends.friends
    }
}
export default connect(mapStateToProps,null)(Chat);