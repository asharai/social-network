import React from 'react';
import './PersonAvatar.css'
const PersonAvatar = ({time}) => {
    return (
        <div className="personAvatar">
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="post__infoPersonImg" alt=""/>
            <hgroup>
                <h4 className="personAvatar__name">John Doe</h4>
                <h6 className="personAvatar__date">{time}</h6>
            </hgroup>

        </div>
    );
};

export default PersonAvatar;