export const closeModalCalendar = ()=>{
    return{
        type:'CLOSE_MODAL_CALENDAR',
    }
}
export const addEventToCalendar = (event)=>{
    return{
        type:'ADD_EVENT',
        event:event
    }
}