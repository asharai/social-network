import React, {useEffect} from 'react';
import axios from '../../axios-weather';
const Weather = () => {
  useEffect(()=>{
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=68052a1de6d8f29ead68f2c6dd073387').then(res=>console.log(res))
  })
    return (
        <div>
        <h4>Widget Preview</h4>
            <div className="widgetWeather__content">
            <div className="widgetWeather__info">
                <aside>
                    <h2 className="widgetWeather__temperature"></h2>
                    <hgroup>
                        <h6></h6>
                        <h6></h6>
                    </hgroup>
                </aside>
                <span></span>
            </div>
                <article className="widgetWeather__description">
                    <p></p>
                    <span>Real feel:</span>
                    <span>Chance of rain:</span>
                </article>
                <div className="widgetWeather__forecast"></div>
            </div>
        </div>
    );
};

export default Weather;