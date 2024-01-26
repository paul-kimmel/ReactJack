import React, { Component } from 'react';
import { Hand } from './Hand';
import './DealerHand.css';


export class DealerHand extends Component {
    static displayname = DealerHand.name;

  constructor(props) {
    
    super(props);
    
    this.handRef = React.createRef();

    this.state = {
      playerName: "dealer",
    };
  }

  render() {
    return (
      <div className="dealer-hand">
        <div>
          <span className="player-name">{this.state.playerName}</span>
          <Hand ref={this.handRef} hand={this.props.hand} reveal={this.props.reveal} />
          
        </div>
        
      </div>
    );
  }
}

