import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './AudioItem.css';
import {connect} from 'react-redux';
import * as audioActions from "../../../store/actions/Audio";

const AudioItem = ({id,img,title,group,album,duration,released,onSwitchSong}) => {
    return (
        <li key={id} className="audioItem">
            <PlayCircleOutlineIcon onClick={()=>onSwitchSong(id)}/>
            <img src={img} alt=""/>
            <hgroup>
                <h4>{title}</h4>
                <h6>{group}</h6>
            </hgroup>
            <span>{album}</span>
            <span>{released}</span>
            <span>{duration}</span>
            <span><HighlightOffIcon/></span>
        </li>
    );
};
const mapDispatchToProps = dispatch =>{
    return {
        onSwitchSong:(id)=>dispatch(audioActions.setIDSong(id)),
    }
}
export default connect(null,mapDispatchToProps)(AudioItem);