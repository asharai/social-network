import React from 'react';
import Friend from "../Friend/Friend";
import './FullFriends.css'
const FullFriends = () => {
    return (
        <div className="fullFriends">
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    );
};

export default FullFriends;