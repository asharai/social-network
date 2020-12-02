import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './AudioItem.css'
const AudioItem = ({id,img,songName,songAuthor,album,duration,released}) => {
    return (
        <li key={id} className="audioItem">
            <PlayCircleOutlineIcon/>
            <img src={img} alt=""/>
            <hgroup>
                <h4>{songName}</h4>
                <h6>{songAuthor}</h6>
            </hgroup>
            <span>{album}</span>
            <span>{released}</span>
            <span>{duration}</span>
            <HighlightOffIcon/>
        </li>
    );
};

export default AudioItem;