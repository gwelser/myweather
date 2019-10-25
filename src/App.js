import React from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import WeatherCard from "./WeatherCard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temp: 82.47,
        condition: {
          code: 803,
          value: "Clouds",
          description: "broken clouds"
        },
        wind: {
          speed: 11.41,
          deg: 90
        }
      },
      location: "Winter Haven",
      loaded: false,
      error: false
    };

    this.updateWeather = this.updateWeather.bind(this);
  }

  updateWeather(data) {
    this.setState({
      weather: data.weather,
      location: data.location
    });
  }

  render() {
    return (
      <div className="my-weather">
        <Header />
        <main>
          <LocationSearch handleSubmit={this.updateWeather} />
          <WeatherCard weather={this.state.weather} />
        </main>
      </div>
    );
  }
}

export default App;
