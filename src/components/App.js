import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {
  state = {
    gifts: [],
  }

  addGift = () => {
    const { gifts } = this.state;
    const newGifts = [...gifts];

    const nextId = gifts.length || 0;

    newGifts.push({ id: nextId + 1 });

    this.setState({ gifts: newGifts });
  }

  removeGift = (id) => {
    const { gifts } = this.state;

    const newGifts = gifts.filter(gift => gift.id !== id);

    this.setState({ gifts: newGifts });
  }

  render() {
    const { gifts } = this.state;

    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            gifts.map(gift => (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
            ))
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;
