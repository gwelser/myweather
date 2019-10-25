import React from "react";
import "./WeatherCard.css";
import moment from "moment";

class WeatherCard extends React.Component {
  render() {
    const temp = Math.round(this.props.weather.temp);

    const condition_value = this.props.weather.condition.value;
    const condition_code = this.props.weather.condition.code;
    const condition_class = "wi wi-owm-" + condition_code;

    const date = moment().format("dddd, MMMM D, YYYY");

    return (
      <div className="card">
        <div className="weather">
          <div className="weather-icon">
            <i className={condition_class}></i>
          </div>
          <div className="weather-details">
            <p className="current">
              <span className="temperature">{temp}˚</span> /{" "}
              <span className="condition">{condition_value}</span>
            </p>
            <p className="current-date">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
