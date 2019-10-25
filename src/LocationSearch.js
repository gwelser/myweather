import React from "react";
import "./LocationSearch.css";

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const q = this.state.location;
    const units = "imperial";
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;

    const url = api_url + `?q=${q}&units=${units}&appid=${api_key}`;

    this.setState(
      {
        weather: {},
        location: "",
        loaded: false,
        error: false
      },
      () => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (200 === data.cod) {
              this.setState({
                weather: {
                  temp: data.main.temp,
                  condition: {
                    code: data.weather[0].id,
                    value: data.weather[0].main,
                    description: data.weather[0].description
                  },
                  wind: {
                    speed: data.wind.speed,
                    deg: data.wind.deg
                  }
                },
                location: q
              });
              this.props.handleSubmit(this.state);
            } else {
              throw data.cod;
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({
              loaded: false,
              error: true
            });
          });
      }
    );
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Location</label>
        <input type="text" id="search" onChange={this.handleChange} />
      </form>
    );
  }
}

export default LocationSearch;
