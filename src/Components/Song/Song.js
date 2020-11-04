import React from 'react';
import './Song.css'
const Song = ({id,img,title,group,duration}) => {
    return (
        <li className="song" key={id}>
            <div className="song__container">
            <span>{id}</span>
            <img src={img} alt="" className="song__img"/>
            <div className="song__info">
                <h5 className="song__title">{title}</h5>
                <p className="song__group">{group}</p>
            </div>
            <span className="song__duration">{duration}</span>
            </div>
        </li>
    );
};

export default Song;