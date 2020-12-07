import React from 'react';
import './FriendsProfileIntro.css';
import {connect} from 'react-redux';
const FriendsProfileIntro = ({friends}) => {
        const friendsList = friends.map(item=>{
                return (
                    <li className="friendsProfileIntro__item" key={item.id}>
                            <img src={item.avatarImg}
                                 alt="" className="friendsProfileIntro__img"/></li>
                )
        })
    return (
        <ul className="friendsProfileIntro">
                {friendsList}
        </ul>
    );
};
const mapStateToProps = state =>{
        return{
                friends:state.friends.friends
        }
}
export default connect(mapStateToProps,null)(FriendsProfileIntro);