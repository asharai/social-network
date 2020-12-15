
const initialState= {
    events: [{
             'start': new Date(2020, 11, 15),
             'end': new Date(2020, 11, 17),
            'allDay':true,

            'title':'Start work please'
        }
    ]
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {

        default:
            return state;
    }
}
export default reducer;