import React, { useEffect, useState } from "react";
import "./Weather.css";
import Forcast from "./Forcast/Forcast";
import Heading from "./Heading/Heading";
import headers from "../config/headers";

function Weather() {
  const key = "c4f4d029024349afaa702941251610";
  const [place, setPlace] = useState("FCT - Abuja Nigeria");
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&days=1&aqi=no&alerts=no`;
    fetch(apiUrl, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((res) => console.error(res));
  }, [place]);

  if (!data || !data.location) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading weather data</h1>
      </div>
    );
  }

  return (
    <div className="screen">
      <Heading data={data} setPlace={setPlace} />
      <div className="temp">
        <h1 className="temp-number">{data.current.temp_c}°</h1>
        {data.forecast.forecastday.map((forecasts) => {
          return (
            <div className="forcasts">
              {forecasts.hour.map((forecast, index) => (
                <Forcast forecast={forecast} index={index} />
              ))}
            </div>
          );
        })}
        <div className="additions">
          <section className="info">
            <h3 className="info-title">Feels like</h3>
            <p className="info-detail">{data.current.feelslike_c}°</p>
          </section>
          <section className="info">
            <h3 className="info-title">Wind</h3>
            <p className="info-detail">{data.current.windchill_c} km/h SW</p>
          </section>
          <section className="info">
            <h3 className="info-title">Humidity</h3>
            <p className="info-detail">{data.current.humidity}% </p>
          </section>
          <section className="info">
            <h3 className="info-title">Atmospheric pressure</h3>
            <p className="info-detail">{data.current.pressure_mb} hPa</p>
          </section>
          <section className="info">
            <h3 className="info-title">Visibility</h3>
            <p className="info-detail">{data.current.vis_km} km</p>
          </section>
          <section className="info">
            <h3 className="info-title">Ultraviolet</h3>
            <p className="info-detail">{data.current.uv} low</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Weather;
