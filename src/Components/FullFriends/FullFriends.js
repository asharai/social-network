import React from 'react';
import Friend from "../Friend/Friend";
import './FullFriends.css'
const FullFriends = () => {
    return (
        <div className="fullFriends">
            <header className="fullFriends__header">
                <h4>James's Friends 86</h4>
                <input type="search" placeholder="Search Friends..."/>
            </header>
           <div className="fullFriends__container">
               <Friend/>
               <Friend/>
               <Friend/>
               <Friend/>
               <Friend/>
               <Friend/>
           </div>
        </div>
    );
};

export default FullFriends;