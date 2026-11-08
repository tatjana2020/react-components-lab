// import WheatherIcon
// import WeatherData
import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx';

const WeatherForecast = ({img,imgAlt, conditions, time, day}) => { // data props from parent (App)
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData  conditions={conditions}   time={time}  day={day} />

    </div>
  );
}

export default WeatherForecast