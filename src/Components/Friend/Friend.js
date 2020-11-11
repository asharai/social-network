import React from 'react';
import './Friend.css'

const Friend = () => {
    return (
        <div className="friend">
            <img src="https://images.unsplash.com/photo-1604158882729-a9fcaa32d25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80" alt="" className="friend__header"/>
           <img className="friend__logo" alt="Remy Sharp" src="https://images.unsplash.com/photo-1604919912564-6480b79b1c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
            <hgroup className="friend__name">
                <h2>Nicholas Grissom</h2>
                <h6>San Francisco, CA</h6>
            </hgroup>
            <ul className="friend__list">
                <li>
                    <p>52</p>
                    <p>Friends</p>
                </li>
                <li>
                    <p>240</p>
                    <p>Photos</p>
                </li>
                <li>
                    <p>16</p>
                    <p>Videos</p>
                </li>
            </ul>
        </div>
    );
};

export default Friend;