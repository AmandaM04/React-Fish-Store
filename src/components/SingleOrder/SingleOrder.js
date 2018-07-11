import React from 'react';

import orderRequests from '../../firebaseRequest/orders';

import './SingleOrder.css';

class SingleOrder extends React.Component {
  deleteOrderClick = () => {
    const firebaseId = this.props.match.params.id;
    orderRequests
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  render () {
    return (
      <div className="SingleOrder">
        <h1>SingleOrder</h1>
        <button className="btn btn-danger" onClick={this.deleteOrderClick}>Delete Order</button>
      </div>
    );
  }
}

export default SingleOrder;
