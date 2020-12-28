const date = new Date(Date.now());
const initialState= {
    events: [{
        'start': new Date(date.getFullYear(), date.getMonth(), date.getDate(),5),
        'end': new Date(date.getFullYear(), date.getMonth(), date.getDate()+1,14),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Start work please',
            'kind':'Personal Event',
            id:0
        },
        {
            'start': new Date(date.getFullYear(), date.getMonth(), date.getDate(),6),
            'end': new Date(date.getFullYear(), date.getMonth(), date.getDate(),9),
            'allDay':false,
            'description':'It is work',
            'title':'Test',
            'kind':'Public Event',
            id:1,
        },
        {
            'start': new Date(2020, 11, 17,7),
            'end': new Date(2020, 11, 17,23),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Test Event',
            'kind':'Personal Event',
            id:2,
        },
        {
            'start': new Date(date.getFullYear(), date.getMonth(), date.getDate(),13),
            'end': new Date(date.getFullYear(), date.getMonth(), date.getDate(),18),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Really work',
            'kind':'Personal Event',
            id:3,
        },

    ],
    modalCalendar:false,
    eventDescription:false,
    activeId:0
}
export const formDate = date =>{
    if(date.length<2){
        return '0' + date
    }
    return  date
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'CLOSE_MODAL_CALENDAR':
            return{
                ...state,
                modalCalendar:false
            }
        case 'CLOSE_MODAL_EVENT':
            return{
                ...state,
                eventDescription:false
            }
        case 'ADD_EVENT':
            const newEvents = state.events.concat(action.event);
            return{
                ...state,
                events:newEvents
            }
        case 'OPEN_EVENT':
            return{
                ...state,
                eventDescription:true,
                activeId:action.id
            }
        default:
            return state;
    }
}
export default reducer;