import React, { useEffect, useState } from "react";
import "./Weather.css";
import Forcast from "./Forcast/Forcast";
import headers from "../config/headers";

function Weather() {
  const key = "c4f4d029024349afaa702941251610";
  const place = "maiduguri";

  const [data, setData] = useState(null);

  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&days=5&aqi=no&alerts=no`;
  useEffect(() => {
    fetch(apiUrl, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((res) => console.error(res));
  });

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
      <div className="heading">
        <section className="heading-title">
          {`${data.location.country}, ${data.location.name}`}
        </section>
        <section className="heading-date">{data.location.localtime}</section>
      </div>
      <div className="temp">
        <h1 className="temp-number">
          {data.current.temp_c} <sup className="temp-degree">°</sup>
        </h1>
        {/* <div className="forcasts">
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
          <Forcast />
        </div> */}

        <div className="additions">
          <section className="info">
            <h3 className="info-title">Feels like</h3>
            <p className="info-detail">
              {data.current.feelslike_c} <sup>°</sup>
            </p>
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
