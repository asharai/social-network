
const initialState= {
    events: [{
             'start': new Date(2020, 11, 15,8),
             'end': new Date(2020, 11, 17),
            'allDay':false,
            'description':'It is work',
            'title':'Start work please'
        },
        {
            'start': new Date(2020, 11, 16,11),
            'end': new Date(2020, 11, 16,12),
            'allDay':false,
            'description':'It is work',
            'title':'Test'
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