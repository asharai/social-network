import React from 'react';
import './WidgetWeather.css';
const WidgetWeather = ({weatherNow,maxWeather,minWeather,img}) => {
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
                      <li>
                          <span></span>
                          <img src=""></img>
                          <span></span>
                      </li>
                  </ul>
                </div>

                <div className="widgetWeather__forecast"></div>
            </div>
        </div>
    );
};

export default WidgetWeather;