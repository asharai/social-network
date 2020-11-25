import React from 'react';
import './PersonAvatar.css'
const PersonAvatar = ({time,img,status}) => {
    return (
        <div className="personAvatar">
            <img src={img || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} className="post__infoPersonImg" alt=""/>
            <span className="post__status"></span>
            <hgroup>
                <h4 className="personAvatar__name">John Doe</h4>
                <h6 className="personAvatar__date">{time}</h6>
            </hgroup>

        </div>
    );
};

export default PersonAvatar;