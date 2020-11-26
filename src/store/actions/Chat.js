export const closeChat = () =>{
    return {
        type:'CLOSE_CHAT'
    }
}
export const openChat =(id)=>{
    return{
        type:'OPEN_CHAT',
        id:id
    }
}