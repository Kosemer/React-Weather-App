import classes from './WeatherIcon.module.css'

function WeatherIcon(props) {
    const iconCode = props.data.weather ? props.data.weather[0].icon : null;
    const iconValid = "http://openweathermap.org/img/wn/" + iconCode + "@4x.png";
  
  return (
    <div className={classes.iconSunBlock}>
      <div className={classes.weatherIcon}>
        {props.data.weather ? <img className="icon" src={iconValid}></img> : null}
      </div>
    </div>
  );
}

export default WeatherIcon;
