import { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import Sunrise_Sunset from "./Sunrise_Sunset";
import OtherWeatherData from "./OtherWeatherData";
import LocTempBlock from "./LocTempBlock";
import SearchBar from "./SearchBar";
import RequestURL from "./RequestURL";

function HttpRequest(props) {
  const [location, setLocation] = useState("Budapest");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const searchLocation = async (event) => {
    if (location === "Budapest" || event.key === "Enter") {
      console.log(location);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=hu&appid=5df8784b76b421fabc90a1eaf2fac2be`;

      setError(null);
      try {
        const response = await fetch(url);
        if (response.status == 404) {
          throw new Error("City not found!");
        }

        if (response.status == 400) {
          throw new Error("Please enter a city!");
        }

        if (!response.ok) {
          throw new Error("The server is unavailable");
        }

        const responseData = await response.json();
        setData(responseData);

        console.log(responseData);
      } catch (error) {
        setError(error.message);
      }
      setLocation("");
    }
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <div className="app">
      <RequestURL location={location}></RequestURL>
      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation}></SearchBar>
      <div className="errorResponse">{error && error}</div>
      <div className="container">
        <div className="top">
          <LocTempBlock data={data}></LocTempBlock>
          <WeatherIcon data={data}></WeatherIcon>
          <Sunrise_Sunset data={data}></Sunrise_Sunset>
        </div>
        <OtherWeatherData data={data}></OtherWeatherData>
      </div>
    </div>
  );
}

export default HttpRequest;
