import React, {useEffect} from 'react';
import axios from '../../axios-weather';
import './Weather.css';
import {connect} from "react-redux";

import * as weatherActions from '../../store/actions/Weather'
const Weather = ({onSetWeather,weather}) => {
  useEffect(()=>{
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=San Francisco,us&appid=68052a1de6d8f29ead68f2c6dd073387').then(res=>onSetWeather(res.data))
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=San Francisco,us&appid=68052a1de6d8f29ead68f2c6dd073387').then(res=>console.log(res))
  },[])

    return (
        <div className="weather">
            <header className="weather__header">
                <div className="weather__headerOverlay">
                    <article className="weather__headerContent">
                        <span><img src={`http://openweathermap.org/img/wn/${weather.weather ? weather.weather[0].icon.slice(0,2):'01'}d@2x.png`} alt=""/></span>
                        <h1  className="weather__headerContentCaption">{weather.main ? (weather.main.temp - 273.15).toFixed() : 0}<sup className="weather__headerContentCaptionSup">o</sup> C</h1>
                        <hgroup>
                            <h4 className="weather__headerContentCaption" >Low:{weather.main ? (weather.main.temp_min - 273.15).toFixed():0}<sup>o</sup>  </h4>
                            <h4 className="weather__headerContentCaption">High:{weather.main ? (weather.main.temp_max - 273.15).toFixed():0}<sup>o</sup> </h4>
                        </hgroup>
                        <p className="weather__headerDesc"> {weather.weather?weather.weather[0].description:null}</p>
                        <ul className="weather__headerParam">
                       <li>
                           <span><i className="fas fa-thermometer-empty"></i></span>
                           <span>Real feel</span>
                           <span>{weather.main ? (weather.main.feels_like - 273.15).toFixed():0}<sup>o</sup></span>
                       </li>
                            <li>
                                <span><i className="fas fa-wind"></i></span>
                                <span>Wind Speed</span>
                                <span>{weather.weather?weather.wind.speed:null} ms</span>
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="weather__headerBackground"></div>

            </header>

        </div>
    );
};
const mapStateToProps = state => {
    return {
        weather:state.weather.weather
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onSetWeather:(weather)=>dispatch(weatherActions.setWeather(weather))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);