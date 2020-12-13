import React, {useEffect} from 'react';
import axios from '../../axios-weather';
import './Weather.css';
import {connect} from "react-redux";
import {kelvinToCelsii} from '../../store/reducers/Weather'
import * as weatherActions from '../../store/actions/Weather'
import WidgetWeather from "../../Components/WidgetWeather/WidgetWeather";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Weather = ({onSetWeather,weather,weatherWeek}) => {
  useEffect(()=>{
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=68052a1de6d8f29ead68f2c6dd073387').then(res=>onSetWeather(res.data)).catch(err=>console.log(err))

  },[])
    const returnValue = val => weather.main ? kelvinToCelsii(val).toFixed() : 0;
    const useStyles = makeStyles((theme) => ({
        formControl: {
          minWidth:'400px',
            background:'#fff'
        },

    }));
    const classes = useStyles();
    const [measure, setMeasure] = React.useState('C');

    const handleChange = (event) => {
        setMeasure(event.target.value);
    }
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const weatherWeekItem = weatherWeek.map((item,i)=>{
        const date = new Date(Date.now());
        const fullDays = ['Sunday ','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const giveDay= ()=> {
            let j = i - fullDays.length;
            if (fullDays[date.getDay() + i + 1]) {
                return fullDays[date.getDay() + i + 1]
            } else {
                return fullDays[date.getDay() + j + 1];

            }
        }
        return (

            <li key={item.dt} className="weather__extendedForecastItem">
                <h3>{i==0?'Tommorow': giveDay()}</h3>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                <h3>{kelvinToCelsii(item.temp.day).toFixed()}<sup>o</sup></h3>
                <hgroup>
                    <h5>{kelvinToCelsii(item.temp.max).toFixed()}<sup>o</sup></h5>
                    <h5>{kelvinToCelsii(item.temp.min).toFixed()}<sup>o</sup></h5>
                </hgroup>
            </li>
        )
    })
    return (
        <div className="weather">
            <header className="weather__header">
                <div className="weather__headerOverlay">
                    <article className="weather__headerContent">
                        <span><img src={`http://openweathermap.org/img/wn/${weather.weather ? weather.weather[0].icon :'01d'}@2x.png`} alt=""/></span>
                        <h1  className="weather__headerContentCaption">{weather.main ? (kelvinToCelsii(weather.main.temp)).toFixed() : 0}<sup className="weather__headerContentCaptionSup">o</sup> C</h1>
                        <hgroup>
                            <h4 className="weather__headerContentCaption" >Low:{weather.main ? (kelvinToCelsii(weather.main.temp_min)).toFixed():0}<sup>o</sup>  </h4>
                            <h4 className="weather__headerContentCaption">High:{weather.main ? (kelvinToCelsii(weather.main.temp_max)).toFixed():0}<sup>o</sup> </h4>
                        </hgroup>
                        <p className="weather__headerDesc"> {weather.weather?weather.weather[0].description:null}</p>
                        <ul className="weather__headerParam">
                       <li>
                           <span><i className="fas fa-thermometer-empty"></i></span>
                           <span>Real feel</span>
                           <span>{weather.main ? kelvinToCelsii(weather.main.feels_like).toFixed():0}<sup>o</sup></span>
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

            <div className="weather__container">
                <WidgetWeather weatherNow={returnValue(weather.main?.temp)}
                               maxWeather={returnValue(weather.main?.temp_max)}
                               minWeather={ returnValue(weather.main?.temp_min)}
                                img={`http://openweathermap.org/img/wn/${weather.weather ? weather.weather[0].icon :'01d'}@2x.png`}/>
                    <div className="weather__rightSide">
                        <div className="weather__settings">
                            <h4 className="weather__settingsTitle">Weather Settings</h4>
                            <article className="weather__settingsContent">
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Temperature Unit</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={measure}
                                        onChange={handleChange}
                                        MenuProps={{
                                            disableScrollLock: true,
                                        }}
                                    >
                                        <MenuItem value={"C"}>C<sup>o</sup>(Celsius)</MenuItem>
                                        <MenuItem value={"F"}>F<sup>o</sup>(Farenheit)</MenuItem>

                                    </Select>
                                </FormControl>
                                <div className="weather__settingsSwitch">
                                    <h4>Show Extended Forecast on Page</h4>
                                    <FormControlLabel

                                        control={
                                            <Switch
                                                checked={state.checkedB}
                                                onChange={handleChangeSwitch}
                                                name="checkedB"
                                                color="primary"

                                            />
                                        }
                                    />
                                </div>
                            </article>

                        </div>
                        <div className="weather__settings">
                            <h4 className="weather__settingsTitle">Extended Forecast</h4>
                                <ul className="weather__extendedForecast">
                                    {weatherWeekItem}
                                </ul>

                        </div>
                    </div>

            </div>

        </div>
    );
};
const mapStateToProps = state => {
    return {
        weather:state.weather.weather,
        weatherWeek:state.weather.weatherWeek
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onSetWeather:(weather)=>dispatch(weatherActions.setWeather(weather))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);