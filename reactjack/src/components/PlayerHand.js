import React, { Component } from 'react';
import { Hand } from './Hand';
import './PlayerHand.css';

export class PlayerHand extends Component {
  static displayName = PlayerHand.name;

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="player-hand">
        <div>
          <div>
            <Hand hand={this.props.hand} reveal={true} />
          </div>
          <div>
            <PlayState playState={this.props.hand.playState} />
          </div>
        </div>
      </div>
    );
  }
}

class PlayState extends Component{

  render() {
    return (
      <span className="play-state">{this.props.playState ?? "current"}</span>
    )
  }
}