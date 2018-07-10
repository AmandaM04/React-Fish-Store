import React from 'react';

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
        <button>{order.id}</button>
      );
    });
    return (
      <div className="OrderSpa">
        <h2>Orders</h2>
        <button>New Order</button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
}

export default OrderSpa;
