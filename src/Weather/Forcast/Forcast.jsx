import "./Forcast.css";

export default function Forcast({ forecast }) {
  const time = new Date(forecast.time_epoch * 1000)
    .toLocaleTimeString()
    .split(":");
  const timeString = `${time[0]}:${time[2]}`;
  return (
    <div className="forcast">
      <h5 className="time">{timeString}</h5>
      <img
        className="forcast-icon"
        src={forecast.condition.icon}
        alt={forecast.condition.text}
      />
      <h4 className="forcast-degree">
        {forecast.temp_c} <sup>o</sup>
      </h4>
    </div>
  );
}
