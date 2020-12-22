export const closeModalCalendar = ()=>{
    return{
        type:'CLOSE_MODAL_CALENDAR',
    }
}
export const openEvent = ()=>{
    return{
        type:'OPEN_EVENT',
    }
}
export const addEventToCalendar = (event)=>{
    return{
        type:'ADD_EVENT',
        event:event
    }
}