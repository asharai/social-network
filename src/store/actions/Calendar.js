export const closeModalCalendar = ()=>{
    return{
        type:'CLOSE_MODAL_CALENDAR',
    }
}
export const closeModalEvent = ()=>{
    return{
        type:'CLOSE_MODAL_EVENT',
    }
}
export const openEvent = (id)=>{
    return{
        type:'OPEN_EVENT',
        id:id
    }
}
export const addEventToCalendar = (event)=>{
    return{
        type:'ADD_EVENT',
        event:event
    }
}