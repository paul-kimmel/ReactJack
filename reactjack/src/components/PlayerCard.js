/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Card } from './Card';
import { cards } from './Cards';
import './PlayerCard.css';



export class PlayerCard extends Component {
    static displayname = PlayerCard.name;

    constructor(props) {
      super(props);
    }

  render() {
    return (
      <>
        <Card className="player-card" card={cards[3]} ></Card>
      </>
    )
  }
}
