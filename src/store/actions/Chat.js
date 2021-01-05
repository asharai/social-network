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
export const addMessage =(id,message)=>{
    return{
        type:'ADD_MESSAGE',
        id:id,
        message:message
    }
}
export const toggleMobileChat =()=>{
    return{
        type:'TOGGLE_MOBILE_CHAT',
    }
}