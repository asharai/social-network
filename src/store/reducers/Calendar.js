
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
            'start': new Date(2020, 11, 17,11),
            'end': new Date(2020, 11, 17,12),
            'allDay':false,
            'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum deserunt distinctio eos, expedita libero maxime molestias natus non obcaecati officiis, provident quaerat quasi ratione sapiente sint totam. Porro, quas.',
            'title':'Test Event'
        }
    ]
}
export const formDate = date =>{
    if(+date<10){
        return '0' + date
    }
    return  date
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {

        default:
            return state;
    }
}
export default reducer;