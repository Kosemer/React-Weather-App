import classes from './OtherWeatherData.module.css'

import { Fragment } from "react";

function OtherWeatherData(props) {
  return (
    <Fragment>
      {props.data.name !== undefined && (
        <div className={classes.bottom}>
          <div>
            {props.data.main ? <p>{props.data.main.feels_like.toFixed()}</p> : null}
            <p>Feels Like</p>
          </div>
          <div>
            {props.data.main ? <p>{props.data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div>
            {props.data.wind ? <p>{props.data.wind.speed.toFixed(2)} km/h</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default OtherWeatherData;
