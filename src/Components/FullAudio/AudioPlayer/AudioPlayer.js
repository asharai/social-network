import React, {useEffect, useRef, useState} from 'react';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import PauseIcon from '@material-ui/icons/Pause';
import RepeatIcon from '@material-ui/icons/Repeat';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import {connect} from 'react-redux';
import './AudioPlayer.css';
import * as audioActions from "../../../store/actions/Audio";
const AudioPlayer = ({playingSong,onNextSong,onPrevSong,songs,idx,onSwitchSongState}) => {
    const audio = useRef('audio_tag');
    const fmtMss= (s)=> {return(s-(s%=60))/60+(9<s?':':':0')+s}

    const [stateVolum,setStateVolume]= useState();
    const [dur,setDur]= useState(0);
    const [cur,setCur]= useState(0);
    useEffect(()=>{
        setVolume(0.5);
        setDur(audio.current.duration);
    },[stateVolum])
    const toggle = ()=>{
    if(audio.current.paused){
        audio.current.play()
    }
    else {
        audio.current.pause()
    }
    }
    const setVolume = (q)=>{
        audio.current.volume = q;
    }
const handleProgress = (e)=>{
let compute =(e.target.value * dur) /100;
setCur(compute);
audio.current.currentTime = compute;
}
    return (

        <div className="controls">
            <audio
                onTimeUpdate={(e)=>setCur(e.target.currentTime)}
                onCanPlay={(e)=>setDur(e.target.duration)}
                 ref={audio} preload="auto" src={songs[idx].audioSrc}
                autoPlay={playingSong}></audio>
            <div className="musicControls">
                <span onClick={()=>onPrevSong()}><SkipPreviousIcon/></span>
                <span onClick={()=>{onSwitchSongState();toggle();}}>

                {playingSong  ? <PauseIcon/> : <PlayArrowIcon/>}</span>
                <span onClick={()=>onNextSong()}><SkipNextIcon/></span>
            </div>
            <div className="progressb">
                <span className="currentT">{fmtMss(cur.toFixed())}</span>
                <input type="range"  title='' onChange={handleProgress} autocomplete="off" value={(cur)*100/dur} name="progressbar"/>
                <span className="totalT">{fmtMss(dur.toFixed())}</span>
            </div>
            <div className="volumeBar">
                <span className="volume"><VolumeUpIcon/></span>
                <input type="range"   value="50" name="volBar" value={stateVolum} onChange={(e)=>setVolume(e.target.value/100)}/>
            </div>
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        idx:state.audio.idActiveSong,
        modalAudioOpen:state.audio.modalAudioOpen,
        playingSong:state.audio.playing,
        songs:state.audio.audio,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onNextSong:()=>dispatch(audioActions.nextSong()),
        onPrevSong:()=>dispatch(audioActions.prevSong()),
        onSwitchSongState:()=>dispatch(audioActions.switchSongState()),



    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AudioPlayer);