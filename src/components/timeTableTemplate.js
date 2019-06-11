import React, { Component } from 'react';

export default class TimeTable extends React.Component {

  getTableTemplate = () => {
    let tableTemplate = [];
    if (this.props.lineItems) {
      for (let i = 0; this.props.lineItems[i]; i++) {
        if (this.props.lineItems[i].timeToStation <= 300) {
          this.props.lineItems[i].timeToStation = this.props.lineItems[i].timeToStation / 60;
          tableTemplate[i] = <tr key={i}><td>{this.props.lineItems[i].lineName}</td><td>{this.props.lineItems[i].stationName}</td><td>{this.props.lineItems[i].destinationName}</td><td>{Math.round(this.props.lineItems[i].timeToStation)} Min</td></tr>
        }
      }
      return tableTemplate;
    }
    else {
      return <div></div>
    }
  }

  render() {
    if (this.props.lineItems) {
      return (<div>
        <h1></h1>
        <table id="time_table">
      <thead>
          <tr><td>line number</td><td>Station Name</td><td>Destination</td><td>Time to station</td></tr>
          </thead>
          <tbody>
          {this.getTableTemplate()}
          </tbody>
        </table>
      </div>
      )
    }
    else {
      return null;
    }
  }
}
