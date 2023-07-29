import React, { useEffect, useState } from "react";




<div className="current-date">{Date(new Date())}</div>


const WeatherData = () => {
  const [data, setdata] = useState();
  const [location, setlocation] = useState("kanpur");
  

  useEffect(() => {

    searchweather()

  },[]);

  const getWeather = async () => {
    if (!location) return;

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=3486ae123cbe4a53a60113647231706&q=${location}&aqi=no `;

    const fetchData = await fetch(apiUrl);

    const data = await fetchData.json();
 console.log(data)
    setdata(data);

    setlocation("");

    // console.log(data);
  };

  const onchangehandler = (e) => {
    setlocation(e.target.value);
  };
  const searchweather = () => {
    getWeather();
  };

  return (
    <div className="weather-webapp">
      <header className="header">

        <div className="getweather">
          <input type="text" placeholder=" Search any location ..." className="input" value={location} onChange={onchangehandler} ></input>

          <button type="button" className="search" onClick={searchweather}> 🌤️ </button>

        </div>
        <div className="current-temp">
        
          <div> <h2>{data?.current?.temp_c} °C</h2></div>
          <div> <h3>{data?.location?.name} - {data?.location?.region} - {data?.location?.country} </h3>
          <h3>{data?.location?.localtime}</h3>
    
          </div>
         
        
         

        </div>
      </header>
      <main className="main">
        <div className="weather-icon">
          <img src={data?.current?.condition?.icon} alt="weather-icon" className="weather-iconbig"></img>
        </div>

        <div className="weather-name">
          <h2>{data?.current?.condition?.text}   </h2>
        </div>


        <div className="weather-location">
          <h3>{data?.location?.name} 🏠</h3>
        </div>


        <hr className="lines"></hr>
        <div className="weather-pressure_mb">
          <h3> Pressure </h3>
          <h3>{data?.current?.pressure_mb} mb</h3>
        </div>
        <hr className="lines"></hr>
        <div className="weather-wind_kph">
          <h3> Wind Speed </h3>
          <h3> {data?.current?.wind_kph} km/h</h3>
        </div>
        <hr className="lines"></hr>
        <div className="weather-uv">
          <h3> UV </h3>
          <h3>{data?.current?.uv} UV</h3>
        </div>
        <hr className="lines"></hr>
        <div className="weather-humidity">
          <h3>Humidity</h3>
          <h3>{data?.current?.humidity} %</h3>
        </div>
        <hr className="lines"></hr>


      </main>
    </div>



  );
};

export default WeatherData;
