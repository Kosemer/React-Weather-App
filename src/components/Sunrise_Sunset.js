import classes from './Sunrise_Sunset.module.css'

function Sunrise_Sunset(props) {
  let sunset = props.data.sys ? props.data.sys.sunset : null;
  let sunrise = props.data.sys ? props.data.sys.sunrise : null;

  let sunriseHours = new Date(sunrise * 1000).getHours();
  let sunriseMinutes = new Date(sunrise * 1000).getMinutes();
  let sunsetHours = new Date(sunset * 1000).getHours();
  let sunsetMinutes = new Date(sunset * 1000).getMinutes();

  let sunriseHours2 = new Date(sunrise * 1000).toTimeString();
  console.log(sunriseHours2);

  const sunriseTime = "Sunrise:  " + sunriseHours + ":" + sunriseMinutes;
  const sunsetTime = "Sunset:  " + sunsetHours + ":" + sunsetMinutes;
  return (
    <div className={classes.sun}>
      {props.data.sys ? <h3>{sunriseTime}</h3> : null}
      {props.data.sys ? <h3>{sunsetTime}</h3> : null}
    </div>
  );
}

export default Sunrise_Sunset;
