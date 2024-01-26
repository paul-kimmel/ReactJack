import React, { Component } from 'react';
import Game  from './Game';

const gameRef = React.createRef();

export default class GameWrapper extends Component {

  static newGame() {
    gameRef.current.newGame();
  }

  static hit() {
    gameRef.current.hit();
  }

  static stand() {
      gameRef.current.stand();
  }

  static surrender() {
    gameRef.current.surrender();
  }

  static split() {
    gameRef.current.split();
  }

  static double() {
    gameRef.current.double();
  }

  static increaseBet() {
    gameRef.current.increaseBet();
  }

  static decreaseBet() {
    gameRef.current.decreaseBet();
  }

  static deal() {
    gameRef.current.newGame();
  }

  static dealSplitGame() {
    gameRef.current.dealSplitGame();
  }


    render() {
        return (
          <Game ref={gameRef}  />
        );
    }
}
