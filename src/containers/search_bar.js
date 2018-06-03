import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "El Dorado Hills"
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Fetch weather data via an action creator
    this.props.fetchWeather(this.state.term);

    // clear the input
    this.setState({
      term: ""
    });
  }

  componentDidMount() {
      this.props.fetchWeather(this.state.term);
      this.setState({
          term: ""
      });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Get a five-day forecast for your favorite city"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      fetchWeather: city => dispatch(fetchWeather(city))
    };
  }
)(SearchBar);
