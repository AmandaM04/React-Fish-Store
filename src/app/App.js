import React, { Component } from 'react';

import './App.css';

import Fish from '../components/Fish/Fish';
import Home from '../components/Home/Home';
import Inventory from '../components/Inventory/Inventory';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import New from '../components/New/New';
import Order from '../components/Order/Order';
import OrderSpa from '../components/OrderSpa/OrderSpa';
import Register from '../components/Register/Register';
import SingleOrder from '../components/SingleOrder/SingleOrder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Fish/>
        </div>
        <div>
          <Home/>
        </div>
        <div>
          <Inventory/>
        </div>
        <div>
          <Login/>
        </div>
        <div>
          <Navbar/>
        </div>
        <div>
          <New/>
        </div>
        <div>
          <Order/>
        </div>
        <div>
          <OrderSpa/>
        </div>
        <div>
          <Register/>
        </div>
        <div>
          <SingleOrder/>
        </div>
      </div>
    );
  }
}

export default App;
