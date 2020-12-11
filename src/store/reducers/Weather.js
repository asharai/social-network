const initialState = {
    weather:{},
    weatherWeek:[],

};
export const kelvinToCelsii = temp =>{
    return temp - 273.5
}
const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather:action.weather

            }
        case 'SET_WEATHER_WEEK':
            return{
                ...state,
                weatherWeek:action.weatherWeek
            }

        default:
            return state;
    }
}
export default reducer;