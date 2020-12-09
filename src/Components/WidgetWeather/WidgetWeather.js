import React from 'react';

const WidgetWeather = () => {
    return (
        <div className='widgetWeather'>
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

export default WidgetWeather;