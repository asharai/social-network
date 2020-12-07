const initialState={
    audio:[
        {
            id: 0,
            audioSrc:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            img:'https://images.unsplash.com/photo-1603224288850-cf0a7939278c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title:'The Past Starts Slow',
            group:'System of revenge',
            duration:'6:13',
            released:2011 ,
            album:'Blood Pressures'

        },
        {
            id: 1,
            audioSrc:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
            img:'https://images.unsplash.com/photo-1603534274211-cc957517bfe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            title:'The pretender',
            group:'Kung fighters',
            duration:'8:47',
             released: 2017,
            album:'Browne'
        },
        {
            id: 2,
            audioSrc:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
            img:'https://images.unsplash.com/photo-1578878703110-503a58cf210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title:'Blood Brothers',
            group:'Iron Maid',
            duration:'7:50',
             released: 2000,
            album:'Brave New World'
        },
        {
            id: 3,
            audioSrc:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
            img:'https://images.unsplash.com/photo-1587868579905-3c9800e065da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
            title:'Seven Nation Army',
            group:'The Black Stripers',
            duration:'7:18',
             released: 2003,
            album:'Elephant'
        },
        {
            id: 4,
            audioSrc:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            img:'https://images.unsplash.com/photo-1603009135510-38a95631777a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80',
            title:'Killer Queen',
            group:'Archiduke',
            duration:'5:44',
             released:1974 ,
            album:'Rapsody'
        }
    ],
    modalAudioOpen:false,
    idActiveSong:0,
    playing:false,
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'SET_AUDIO_MODAL':
            if(state.modalAudioOpen && state.playing){
                return{
                    ...state,
                    playing:!state.playing,
                    modalAudioOpen: !state.modalAudioOpen
                }
            }
            return{
                ...state,
                modalAudioOpen: !state.modalAudioOpen
            }

        case 'SET_ID_SONG':
            return {
                ...state,
                idActiveSong:action.id,
                playing:true
            }
        case 'SWITCH_SONG_STATE':

            return{
            ...state,
             playing:!state.playing
        }
        case 'NEXT_SONG':
            if(state.idActiveSong+1>state.audio[state.audio.length-1].id){
                return {
                    ...state,
                    idActiveSong: 0
                }
            }
            return{
                ...state,
                idActiveSong: state.idActiveSong +1
            }
        case 'PREV_SONG':
            if(state.idActiveSong-1<0){
                return {
                    ...state,
                    idActiveSong: state.audio[state.audio.length-1].id
                }
            }
            return{
                ...state,
                idActiveSong: state.idActiveSong-1
            }
        case 'REMOVE_SONG':

            let newAuidos = [...state.audio];
            if(newAuidos.length===1){
                return {
                    ...state,
                    audio:[]
                }
            }
            newAuidos = newAuidos.filter(item=>item.id!=action.id);
            return {
                ...state,
                audio: newAuidos
            }
        default:
            return state;
    }
}
export default reducer;