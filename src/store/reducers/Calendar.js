
const initialState= {
    events: [{
             'start': new Date(2020, 11, 15,8),
             'end': new Date(2020, 11, 17),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Start work please'
        },
        {
            'start': new Date(2020, 11, 16,11),
            'end': new Date(2020, 11, 16,12),
            'allDay':false,
            'description':'It is work',
            'title':'Test'
        },
        {
            'start': new Date(2020, 11, 17,7),
            'end': new Date(2020, 11, 17,23),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Test Event'
        },
        {
            'start': new Date(2020, 11, 19,4),
            'end': new Date(2020, 11, 19,12),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Really work'
        },

    ],
    modalCalendar:true,
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
        case 'ADD_EVENT':
            const newEvents = state.events.concat(action.event);
            return{
                ...state,
                events:newEvents
            }
        default:
            return state;
    }
}
export default reducer;