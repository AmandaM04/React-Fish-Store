import React from 'react';

import fishRequests from '../../firebaseRequest/fishes';
import Fish from '../Fish/Fish';

import './Inventory.css';

class Inventory extends React.Component {
  state = {
    fishes: [],
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
        />
      );
    });
    return (
      <div className="Inventory col-xs-12">
        <h1>Inventory</h1>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
