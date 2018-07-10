import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import orderRequests from '../../firebaseRequest/orders';
import authRequest from '../../firebaseRequest/auth';

import './OrderSpa.css';

class OrderSpa extends React.Component {
  state = {
    orders: [],
  }

  componentDidMount () {
    orderRequests
      .getRequest(authRequest.getUid())
      .then((orders) => {
        this.setState({ orders });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  render () {
    const orderComponents = this.state.orders.map((order) => {
      return (
        <button
          key={order.id}
          className="col-xs-12 btn btn-default order-button"
        >
          <span className="col-xs-6">Order Number: {order.id}</span>
          <span className="col-xs-6">Order Date: {moment(order.dateTime).format('LLL')}</span>
        </button>
      );
    });
    return (
      <div className="OrderSpa col-xs-12">
        <h2>Orders</h2>
        <button><Link to="/new">New Order</Link></button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
}

export default OrderSpa;
