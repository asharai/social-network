import React from 'react';
import * as chatActions from '../../../store/actions/Chat';
import {connect} from 'react-redux';
import {getStatus} from "../../../store/reducers/Chat";
import './MobileChatMenu.css';
const MobileChatMenu = ({chat,onOpenChat,openChat}) => {
    const mobileChatFriends = chat.map((item)=>{
        return (
            <li key={item.id} className="chatMenu__item" onClick={()=>onOpenChat(item.id)}>
                <img src={item.avatarImg} alt="" className="chatMenu__img"/>
                <span className="chatMenu__status" style={{backgroundColor:getStatus(item.status)}}></span>
                <hgroup>
                    <h4>{item.name}</h4>
                    <h6>{item.status}</h6>
                </hgroup>
            </li>
        )
    })
    return (
        <ul className={openChat ? "mobileChatMenu openMobileMenu" :"mobileChatMenu" }>
            {mobileChatFriends}
        </ul>
    );
};
const mapStateToProps = state =>{
    return{
        openChat:state.chat.mobileChat,
        chat:state.chat.chat
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onOpenChat:(id)=>dispatch(chatActions.openChat(id)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileChatMenu);