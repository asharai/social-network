import React from 'react';
import './Video.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {connect} from 'react-redux';
import * as videoActions from "../../store/actions/Videos";
const Video = ({img,name,id,duration,onSetIdVideo,onChangeModal}) => {
    return (
        <li key={id} className="video" onClick={()=>onSetIdVideo(id)}>
            <div className="video__content">
                <div className="video__overlay" onClick={()=>onChangeModal()}>
                    <PlayArrowIcon style={{fontSize:'52px',color:'#333',backgroundColor:'#ff5e3a',border:'3px solid #fff',borderRadius:'50%',padding:'0'}}/>
                </div>
                <img src={img} className="video__img" alt=""/>
            </div>
            <div className="video__description">
                <h4 className="video__name">{name}</h4>
                <p className="video__duration">{duration}</p>
            </div>
        </li>
    );
};
const mapDispatchToProps = dispatch =>{
    return {
        onSetIdVideo:(id)=> dispatch(videoActions.setIdVideo(id)),
        onChangeModal:()=>dispatch(videoActions.changeModal())
    }
}
export default connect(null,mapDispatchToProps)(Video);
