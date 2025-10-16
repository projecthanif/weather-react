import { CiCloudOn } from "react-icons/ci";
import "./Forcast.css";

export default function Forcast() {
  return (
    <div className="forcast">
      <h5 className="time">Now</h5>
      <CiCloudOn className="forcast-icon" />
      <h4 className="forcast-degree">
        17 <sup>o</sup>
      </h4>
    </div>
  );
}
