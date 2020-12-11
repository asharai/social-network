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