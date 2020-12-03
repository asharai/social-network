export const openAudioModal = ()=>{
    return{
        type:'SET_AUDIO_MODAL',
    }
}
export const setIDSong = (id)=>{
    return{
        type:'SET_ID_SONG',
        id:id
    }
}
export const nextSong = ()=>{
    return{
        type:'NEXT_SONG',
    }
}
export const prevSong = ()=>{
    return{
        type:'PREV_SONG',
    }
}
export const switchSongState = ()=>{
    return{
        type:'SWITCH_SONG_STATE',
    }
}