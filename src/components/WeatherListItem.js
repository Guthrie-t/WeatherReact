import React, { Component } from 'react';
import { getDate, getWeekday } from '../utilities/dates';

class WeatherListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { forecastDay, timezoneOffset } = this.props;
    const date = getDate(forecastDay.dt, timezoneOffset);
    const weekday = getWeekday(date);
    return (
      <div className="weather-list-item" onClick={this.onClick}>
        <h2>{date.getMonth() + 1} / {date.getDate()}</h2><h3>{weekday}</h3>
        <h3 className="low">{forecastDay.temp.min.toFixed(1)}&deg;F </h3>
        <h3 className="high">{forecastDay.temp.max.toFixed(1)}&deg;F </h3>
      </div>
    );
  }


  onClick() {
    const { onDayClicked, index } = this.props;
    onDayClicked(index);
  }
}

export default WeatherListItem;
