import React, {useEffect} from 'react';
import './WidgetWeather.css';
import axios from '../../axios-weather';
import * as weatherActions from '../../store/actions/Weather';
import {kelvinToCelsii} from '../../store/reducers/Weather'
import {connect} from 'react-redux';
const WidgetWeather = ({weatherNow,maxWeather,minWeather,img,onSetWeatherWeek,weatherWeek}) => {
    useEffect(()=>{
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=37.77&lon=-122.42&exclude=hourly,minutely&appid=68052a1de6d8f29ead68f2c6dd073387').then(res=>{
          onSetWeatherWeek(res.data.daily)
      }).catch(err=>console.log(err))
    },[]);
    let date = new Date (Date.now());
    const fullDays = ['Sunday ','Monday','Wednesday','Thursday','Friday','Saturday'];
    const fullMonth = [ "January","February","March","April","May","June","July","August","September","October","November" ,"December"]
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const forecastItem = weatherWeek? weatherWeek.map((item,i)=>{


        const giveDay= ()=> days[date.getDay()+i+1] ?  days[date.getDay()+i+1] :  days[0+i-1]



        return (
            <li className="widgetWeather__forecastItem">
                <span>{giveDay()}</span>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                <span>{kelvinToCelsii(item.temp.day).toFixed()}<sup>o</sup></span>
            </li>
        )
    }) : null;
    return (
        <div className='widgetWeather'>
            <h4 className="widgetWeather__title">Widget Preview</h4>
            <div className="widgetWeather__content">
                <div className="widgetWeather__background"></div>
                <div className="widgetWeather__info">
                    <aside className="widgetWeather__main">
                        <h2 className="widgetWeather__temperature">{weatherNow}<sup>o</sup></h2>
                        <hgroup>
                            <p>{maxWeather}<sup>o</sup></p>
                            <p>{minWeather}<sup>o</sup></p>
                        </hgroup>
                        <img src={img} alt=""/>
                    </aside>
                  <ul className="widgetWeather__forecast">
                    {forecastItem}
                  </ul>
                    <p className="widgetWeather__day">{`${fullDays[date.getDay()]}, ${fullMonth[date.getMonth()]} ${date.getDate()}th`}</p>
                    <p>San Francisco,CA</p>
                </div>


            </div>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        weatherWeek:state.weather.weatherWeek
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onSetWeatherWeek:(weather)=>dispatch(weatherActions.setWeatherWeek(weather))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WidgetWeather);