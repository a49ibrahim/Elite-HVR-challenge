import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import BikeSearch from './Component/BikeSearch.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        
        <p>
          <BikeSearch />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
