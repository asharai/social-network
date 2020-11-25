import React from 'react';
import {connect} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import './ChatMenu.css';
const ChatMenu = ({chat}) => {
    let chatFriends = chat.map((item)=>{
        return (
            <li className="chatMenu__item">
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
export default connect(mapStateToProps,null)(ChatMenu);