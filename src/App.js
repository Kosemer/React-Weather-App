import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState("Budapest");
  const [data, setData] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=hu&appid=5df8784b76b421fabc90a1eaf2fac2be`;

  const searchLocation = async (event) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("The server is unavailable");
      }
      const responseData = await response.json();
      setData(responseData);

      console.log(data);
    } catch (error) {}
    setLocation("");
  };

  const locationHandler = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    searchLocation();
  }, []);

  const iconCode = data.weather ? data.weather[0].icon : null;
  const iconValid = "http://openweathermap.org/img/wn/" + iconCode + "@4x.png";

  let sunset = data.sys ? data.sys.sunset : null;
  let sunrise = data.sys ? data.sys.sunrise : null;


  let sunriseHours = new Date(sunrise * 1000).getHours();
  let sunriseMinutes = new Date(sunrise * 1000).getMinutes();
  let sunsetHours = new Date(sunset * 1000).getHours();
  let sunsetMinutes = new Date(sunset * 1000).getMinutes();

  let sunriseHours2 = new Date(sunrise * 1000).toTimeString();
  console.log(sunriseHours2)

  const sunriseTime = "Sunrise:  " + sunriseHours + ':' + sunriseMinutes;
  const sunsetTime = "Sunset:  " + sunsetHours + ':' + sunsetMinutes;


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          type="text"
          onChange={locationHandler}
          placeholder="Enter location"
        ></input>
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} C°</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
          <div className="weatherIcon">
            {data.weather ? <img className="icon" src={iconValid}></img> : null}
          </div>
          <div className="sun">
            {data.sys ? <h3>{sunriseTime}</h3> : null}
            {data.sys ? <h3>{sunsetTime}</h3> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed(2)} km/h</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
