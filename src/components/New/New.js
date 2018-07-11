import React from 'react';

import Fish from '../Fish/Fish';
import Order from '../Order/Order';
import fishRequests from '../../firebaseRequest/fishes';
import authRequests from '../../firebaseRequest/auth';
import orderRequests from '../../firebaseRequest/orders';

import './New.css';

class New extends React.Component {
  state = {
    fishes: [],
    order: {},
  };

  addToOrder = (key) => {
    const newOrder = {...this.state.order};
    newOrder[key] = newOrder[key] + 1 || 1;
    this.setState({ order: newOrder});
  }

  removeFromOrder = (key) => {
    const newOrder = {...this.state.order};
    delete newOrder[key];
    this.setState({order: newOrder});
  }

  saveNewOrder = () => {
    const newOrder = {fishes: {...this.state.order}};
    newOrder.uid = authRequests.getUid();
    newOrder.dateTime = Date.now();
    orderRequests
      .postRequest(newOrder)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  componentDidMount () {
    fishRequests
      .getRequest()
      .then((fishes) => {
        this.setState({ fishes });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  render () {
    const fishComponents = this.state.fishes.map((fish) => {
      return (
        <Fish
          key={fish.id}
          details={fish}
          addToOrder={this.addToOrder}
        />
      );
    });
    return (
      <div className="New">
        <div className="col-xs-8 inventory-container">
          <h2>Inventory</h2>
          <ul className="fishes">
            {fishComponents}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
          saveNewOrder={this.saveNewOrder}
        />
      </div>
    );
  }
}

export default New;
