import React, {useState} from 'react';
import Friend from "../Friend/Friend";
import {connect} from "react-redux";
import './FullFriends.css'
const FullFriends = ({friends}) => {
    const [friendName='',setFriendName]=useState();
    const searchFriend=(event)=>{
        setFriendName(event.target.value);
    }
    const friendList =friends.filter(friend=>friend.name.toLowerCase().indexOf(friendName)!=-1).map((item)=>{
        return (
            <Friend
                id={item.id}
                name={item.name}
                city={item.city}
                friendsCount={item.friendsCount}
                photoCount={item.photoCount}
                videoCount={item.videoCount}
                description={item.description}
                time={item.timeWhenBecomeFriend}
                avatarImg={item.avatarImg}
                headerImg={item.headerImg}
            />
        )
    });
    return (
        <div className="fullFriends">
            <header className="fullFriends__header">
                <h4>James's Friends {friends.length}</h4>
                <input type="search" placeholder="Search Friends..." onChange={searchFriend} value={friendName}/>
            </header>
           <div className="fullFriends__container">
               {friendList}
           </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        friends: state.friends.friends
    };
}
export default connect(mapStateToProps,null)(FullFriends);