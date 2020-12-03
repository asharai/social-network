import React from 'react';
import './Song.css';
import * as audioActions from "../../store/actions/Audio";
import {connect} from 'react-redux'
const Song = ({id,img,title,group,duration,onSetAudioModal}) => {
    return (
        <li className="song" key={id} onClick={()=>onSetAudioModal()}>
            <div className="song__container">
            <span className="song__num">{id}</span>
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
const mapDispatchToProps = dispatch =>{
    return{
        onSetAudioModal:()=>dispatch(audioActions.openAudioModal())
    }
}
export default connect(null,mapDispatchToProps)(Song);