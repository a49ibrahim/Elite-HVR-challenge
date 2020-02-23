import React, { Component } from "react";
import Moment from 'react-moment';
import App from '../index.js'

Moment.globalFormat = 'ddd MMM DD, YYYY HH:mm A';

export default class BikeSearch extends React.Component {
  state = {
    loading: true,
    bike: null
  };
  
  async componentDidMount(){
    const url = "https://www.bikewise.org/documentation/api_v2#!/locations/GET_version_locations_format_get_0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({bike: data.result[0]})
    console.log(data);
  }

  render(){
    return (
      <div>
      {this.state.loading || !this.state.data ? 
      (<div>loading...</div>) : 
      (<div>
        <div>{this.state.data}</div>
      </div> )} 
      </div>
    );
  }
}