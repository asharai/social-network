import React from 'react';
import Song from "../Song";
import './SongList.css'
import FullAudio from "../../FullAudio/FullAudio";

const songs = [
    {id:1,
    img:'https://images.unsplash.com/photo-1603224288850-cf0a7939278c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title:'The Past Starts Slow',
    group:'System of revenge',
    duration:'3:24'},
    {id:2,
        img:'https://images.unsplash.com/photo-1603534274211-cc957517bfe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        title:'The pretender',
        group:'Kung fighters',
        duration:'3:24'},
    {id:3,
        img:'https://images.unsplash.com/photo-1578878703110-503a58cf210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title:'Blood Brothers',
        group:'Iron Maid',
        duration:'3:24'},
    {id:4,
        img:'https://images.unsplash.com/photo-1587868579905-3c9800e065da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        title:'Seven Nation Army',
        group:'The Black Stripers',
        duration:'3:24'},
    {id:5,
        img:'https://images.unsplash.com/photo-1603009135510-38a95631777a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80',
        title:'Killer Queen',
        group:'Archiduke',
        duration:'3:24'},
]
let song = songs.map(item=>{
    return (
        <Song id={item.id} img={item.img} title={item.title} group={item.group} duration={item.duration}/>
    )
})
const SongList = () => {
    return (
        <div>
            <ol className="songList">

                {song}
            </ol>
            <FullAudio/>
        </div>

    );
};

export default SongList;