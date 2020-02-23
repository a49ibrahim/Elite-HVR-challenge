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
    const url = "https://bikewise.org:443/api/v2/locations/markers?proximity=Berlin&proximity_square=100"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({bike: data.features, loading: false})
    //console.log(data.features[0]);
  }

  render(){
    return (
      <div>
      {this.state.loading || !this.state.bike ? 
      (<div>loading...</div>) : 
      (<div>
        {this.state.bike.map((incident) => 
        (<ol>
          <li>Title: {incident.properties.title}
            <h4>Occured at: {incident.properties.occurred_at}</h4>
              <h5>{incident.properties.description}</h5>
          </li>
        </ol>)) }
      </div> )} 
      </div>
    );
  }
}