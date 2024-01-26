import React, { Component } from 'react';
import './PlayerCard.css';

export class DrawCardTest extends Component {
  static displayname = DrawCardTest.name;

  constructor(props) {
    super(props);
    this.state = { cardString: ""};
  }

  componentDidMount() {
    this.getCard();
  }

  render() {
    return (
      <div className="player-card">
        <img src={this.state.cardString} alt="card" />
      </div>
      
    )
  }

  async getCard() {
    const response = await fetch('card');
    const data = await response.text();
    this.setState({ cardString: data });
  }

}

