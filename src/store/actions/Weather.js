export const setWeather = (weather)=>{
    return{
        type:'SET_WEATHER',
        weather:weather,
    }
}
export const setWeatherWeek = (weather)=>{
    return{
        type:'SET_WEATHER_WEEK',
        weatherWeek:weather,
    }
}
export const setFarenheit = ()=>{
    return{
        type:'SET_FARENHEIT',
    }
}
export const setCelsii = ()=>{
    return{
        type:'SET_CELSII',
    }
}