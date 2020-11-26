import React from 'react';
import {connect} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import * as chatActions from '../../../store/actions/Chat'
import './ChatMenu.css';
const ChatMenu = ({chat,onOpenChat}) => {
    let chatFriends = chat.map((item)=>{
        return (
            <li key={item.id} className="chatMenu__item" onClick={()=>onOpenChat(item.id)}>
                <img src={item.avatarImg} alt="" className="chatMenu__img"/>
                <span className="chatMenu__status"></span>
            </li>
        )
    })
    return (
      <aside className="chatMenu">
          <ul className="chatMenu__list">
              {chatFriends}
          </ul>
        <MenuIcon style={{fontSize:'40px',cursor:'pointer'}}/>
      </aside>
    );
};
const mapStateToProps = state =>{
    return{
        friends:state.friends.friends,
        chat:state.chat.chat
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onOpenChat:(id)=>dispatch(chatActions.openChat(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChatMenu);