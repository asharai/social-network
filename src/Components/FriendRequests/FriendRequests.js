import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './FriendRequests.css'
const FriendRequests = () => {
    return (
            <ul className="friendRequests">
                <li className="friendRequests__item">
                    <img src="https://images.unsplash.com/photo-1557245419-a727f9b57615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <hgroup>
                        <h3>Tamara Romanoff</h3>
                        <h5>Mutual Friend: Sarah Hetfield</h5>
                    </hgroup>
                    <div>
                        <AddIcon/>
                        <RemoveIcon/>
                    </div>
                </li>
                <li className="friendRequests__item">
                    <img src="https://images.unsplash.com/photo-1600267185393-e158a98703de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    <hgroup>
                        <h3>Tony Stevens</h3>
                        <h5>4 Friends in Common</h5>
                    </hgroup>
                    <div>
                        <AddIcon/>
                        <RemoveIcon/>
                    </div>
                </li>
                <li className="friendRequests__item">
                    <img src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg" alt=""/>
                    <hgroup>
                        <h3>John Bochem</h3>
                        <h5>3 Friends in Common</h5>
                    </hgroup>
                    <div>
                        <AddIcon/>
                        <RemoveIcon/>
                    </div>
                </li>
            </ul>

    );
};

export default FriendRequests;