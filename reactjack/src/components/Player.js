import React, { Component }  from 'react';
import { PlayerHands } from "./PlayerHands";
import { PlayerHand } from "./PlayerHand";
import PlayDecisionEngine  from "./PlayDecisionEngine";

export class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: this.props.playerBalance,
      name : "PaulKi"
      
    };
  }

  getStatistics() {
    return "statistics object";
  }

  getCurrentBet() {
    return this.props.playerBet;
  }

  hasSufficientFunds() {
    return this.getTotalBet() <= this.money;
  }

  getTotalBet() {
    let total = 0;
    //for each playerhand total the current bet

    return total;
  }

  canIncreaseMinimumBet(additionalBet) {
    return this.getCurrentBet() + additionalBet <= this.money;
  }

  increaseMinimumBet(additionalBet) {
    this.setState({
      currentBet: this.state.currentBet + additionalBet
    });
     
  }

  canIncreaseBet(additionalBet) {
    return this.getTotalBet() + additionalBet <= this.money;
  }

  getNewTotalBet(additionalBet) {
    return this.getTotalbet() + additionalBet;
  }

  

  canSplit(index) {
    return this.getHand(index).canSplit &&
      this.canIncreaseBet(this.getHand(index).getCurrentBet());
  }

 

  double(index, card) {
    if (this.canIncreaseBet(this.getHand(index).getCurrentBet)) {
      this.getHand(index).double(card);
    }
  }

  split(handToSplit) {
    const cardToRemove = handToSplit.remove(1);
    this.hands.insertAfter(handToSplit, new PlayerHand(handToSplit.currentBet, cardToRemove));
  }


  increaseBet(index, amount) {
    if (this.canIncraseBet(amount)) {
      //probably need a setter
      this.getHand(index).currentBet += amount;
      return true;
    }

    return false;
  }

  canDecreaseMinimumBet(amount) {
    return this.getCurrentBet() - amount > 0;
  }

  decreaseMinimumBet(amount) {
    this.setState({
      currentBet: this.state.currentBet - amount
    });
  }


  canDecreaseBet(index, amount) {
    return this.getHand(index).getCurrentBet() - amount > 0;
  }


  decreaseBet(index, amount) {

    if (this.canDecreaseBet(index, amount)) {
      this.getHand(index).currentBet -= amount;
      return true;
    }

    return false;
  }

  isValidIndex(index) {
    return index >= 0 && index < this.hands.length;
  }

  win(hand) {
    this.money += PlayDecisionEngine.getChange(hand);
  }


  lose(amount) {
    this.money += this.amount;
  }

  getMoney() {
    return this.state.money;
  }

  setMoney(money) {
    this.setState({
      money: money
    });
  }

  getName() {
    return this.state.name;
  }

  dealCard(index, card) {
    this.getHand(index).add(card);
  }
    
    

  isBlackJack(index) {
    return this.getHand(index).isBlackJack();
  }

  getHand(index) {
    return this.props.hands[index];
  }

  getBlackJackCount() {

    let count = 0;
    this.props.hands.forEach(hand => {
      if (hand.isBlackJack()) {
        count += 1;
      }
    });

    return count;
  }


  getCurrentHand() {
    return this.getHand(0);
  }

  surrender(hand) {
    this.setState({
      money: PlayDecisionEngine.getChange(hand)
    });
    
  }
    

  render() {
    return (
      <>
        <PlayerHands hands={this.props.hands} reveal={true} surrender={this.props.surrender}  />
      </>
    );
  }
}