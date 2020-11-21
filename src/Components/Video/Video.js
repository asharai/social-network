import React from 'react';
import './Video.css'
const Video = ({img,name,id,duration,url}) => {
    return (
        <li key={id} className="video">
            <img src={img} className="video__img" alt=""/>
            <div className="video__description">
                <h4 className="video__name">{name}</h4>
                <p className="video__duration">{duration}</p>
            </div>
        </li>
    );
};

export default Video;
// <iframe width="560" height="315" src="https://www.youtube.com/embed/XZmGGAbHqa0" frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen></iframe>