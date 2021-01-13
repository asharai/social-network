import React from 'react';
import './FindFriend.css'
const FindFriend = ({img,name,count}) => {
    return (
        <article className="findFriend">
            <img src={img} alt=""/>
            <hgroup>
                <h2>{name}</h2>
                <h5>{count} Friends in Common</h5>
            </hgroup>
        </article>
    );
};

export default FindFriend;