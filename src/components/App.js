import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    gifts: [],
  }

  addGift = () => {
    const { gifts } = this.state;
    const newGifts = [...gifts];

    const nextId = gifts.length > 0 ? gifts.length : 0;

    newGifts.push({ id: nextId + 1 });

    this.setState({ gifts: newGifts });
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;
