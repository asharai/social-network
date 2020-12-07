import React from 'react';
import Song from "../Song";
import './SongList.css'
import FullAudio from "../../FullAudio/FullAudio";
import {connect} from "react-redux";
const SongList = ({audio}) => {
    let song = audio.map((item,i)=>{
        return (
            <Song id={item.id} idx={i+1} img={item.img} title={item.title} group={item.group} duration={item.duration}/>
        )
    })
    return (
        <div>
            <ol className="songList">

                {song}
            </ol>
            <FullAudio/>
        </div>

    );
};
const mapStateToProps = state=>{
    return {
        audio:state.audio.audio
    }
}
export default connect(mapStateToProps,null)(SongList);