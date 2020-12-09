const initialState = {
    weather:{},

};
const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                weather:action.weather

            }

        default:
            return state;
    }
}
export default reducer;