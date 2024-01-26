import React, { Component } from 'react';
import { PlayerHand } from './PlayerHand.js';
import './PlayerHands.css';
export class PlayerHands extends Component {
    static displayName = PlayerHands.name;


    render() {
      return (
        
        <div className="player-hands">
          <PlayerName   playerName={"PaulKi"} />
            {this.props.hands.map((hand, index) => (
              <PlayerHand key={index} hand={hand} reveal={true} />
          ))}
        </div>
        
        );
    }
}

class PlayerName extends Component {

  render() {
    return (
      <span className="player-name">{this.props.playerName}</span>
    );
  }
}
