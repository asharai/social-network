const initialState = {
    weather:{},

};
export const kelvinToCelsii = temp =>{
    return temp - 273.5
}
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