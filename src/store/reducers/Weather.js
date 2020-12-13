const initialState = {
    weather:{},
    weatherWeek:[],
    celsii:true,

};
export const kelvinToCelsii = (temp,celsii=true) =>{
    return celsii ? temp - 273.5 : (temp -273.5) * 9/5 + 32
}
const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather:action.weather

            }
        case 'SET_WEATHER_WEEK':
            return {
                ...state,
                weatherWeek: action.weatherWeek
    }
                case 'SET_FARENHEIT':
                    return {
                    ...state,
                    celsii:false}
        case 'SET_CELSII':
            return {
                ...state,
                celsii:true}


        default:
            return state;
    }
}
export default reducer;