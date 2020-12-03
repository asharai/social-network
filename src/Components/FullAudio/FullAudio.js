import React from 'react';
import {Modal} from "@material-ui/core";
import {connect} from 'react-redux';
import './FullAudio.css';
import * as audioActions from '../../store/actions/Audio'
import AudioItem from "./AudioItem/AudioItem";
import AudioPlayer from "./AudioPlayer/AudioPlayer";


const FullAudio = ({audio,onSetAudioModal,modalAudioOpen}) => {
    const audios=audio.map(item=>{
        return (
            <AudioItem {...item} released='2014'/>
        )
    })
    return (
        <Modal open={modalAudioOpen} onClose={()=>onSetAudioModal()} >
            <div className="fullAudio">

                <ul className="fullAudio__list">
                    <li>
                        <span>PLAY</span>
                        <span>COVER</span>
                        <span>SONG AND ARTIST </span>
                        <span>ALBUM </span>
                        <span>RELEASED</span>
                        <span>DURATION</span>
                        <span>REMOVE</span>
                    </li>
                    {audios}
                </ul>
                <div className="fullAudio__controls">
                   <AudioPlayer/>
                </div>
            </div>
        </Modal>

    );
};
const mapStateToProps = state =>{
    return{
        audio:state.audio.audio,
        modalAudioOpen:state.audio.modalAudioOpen,

    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onSetAudioModal:()=>dispatch(audioActions.openAudioModal()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FullAudio);