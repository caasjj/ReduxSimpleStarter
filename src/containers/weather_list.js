import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from '../components/google-map'


const KtoF = K => {
  return (((K - 272.15) * 9) / 5 + 32).toFixed(1);
};

const dTtoTime = dt => {
  const date = new Date(dt * 1000);
  return date.getHours() + ":" + date.getMinutes();
};

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    if (!cityData) return null;

    const { name } = cityData.city;

    const {temperature, pressure, humidity} = this.getChartSparkWeatherData( cityData );

    console.log("City: ", name, " Temperature: ", temperature);
    return (
      <tr key={name}>
        <td ><GoogleMap lat={cityData.city.coord.lat} lng={cityData.city.coord.lon} /></td>
        <td>
          <Chart data={temperature} width={200} height={100} color="blue" units="F"/>
        </td>
        <td>
          <Chart data={pressure} width={200} height={100} color="red" units="kPa"/>
        </td>
        <td>
          <Chart data={humidity} width={200} height={100} color="green" units="%"/>
        </td>
      </tr>
    );
  }

  getChartSparkWeatherData( cityData ) {
      if (!cityData) return null;

      const temperature = cityData.list.map(item => {
          return KtoF(item.main.temp);
      });

      const pressure = cityData.list.map(item => {
          return item.main.pressure;
      });

      const humidity = cityData.list.map(item => {
          return item.main.humidity;
      });

      return { temperature, pressure, humidity}

  }

  // getChartJSWeatherData(cityData) {
  //   if (!cityData) return null;
  //
  //   const temperature = cityData.list.map(item => {
  //     return KtoF(item.main.temp);
  //   });
  //
  //   const pressure = cityData.list.map(item => {
  //     return item.main.pressure;
  //   });
  //
  //   const humidity = cityData.list.map(item => {
  //     return item.main.humidity;
  //   });
  //   const labels = cityData.list.map(item => {
  //     return dTtoTime(item.dt);
  //   });
  //
  //   return {
  //     temperature: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "Temperature",
  //           data: temperature,
  //           borderWidth: 1
  //         }
  //       ]
  //     },
  //
  //     pressure: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "Temperature",
  //           data: pressure,
  //           borderWidth: 1
  //         }
  //       ]
  //     },
  //
  //     humidity: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "Temperature",
  //           data: humidity,
  //           borderWidth: 1
  //         }
  //       ]
  //     }
  //   };
  // }

  render() {
    const { weather } = this.props;

    if (!weather) return null;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(({ weather }) => {
  return { weather };
})(WeatherList);
