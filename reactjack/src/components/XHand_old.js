import React, { Component } from 'react';
import { Card } from './Card';

//obsolete
export class Hand extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);

      this.state = {
        standing: this.props.standing,
        surrender: this.props.surrender,
        doubling: this.props.doubling,
        
      };
  }


  count() {
    return this.props.hand.length;
  }


  getTextHand() {

    let result = "";
    this.props.hand.map((item) => result = result.concat(`${item.toString()}`));
    return result;

  }

  isBlackJack() {

    return this.count() === 2 && this.getHandValueHigh() === 21;
  }

  static isBlackJack(hand) {
    return hand.length === 2 && Hand.getHandValueHigh(hand) === 21;
  }

  static getHandValueHigh(hand) {
    let value = 0;
    hand.forEach(card => value += card.highValue);
    return value;
  }

  static isSurrendered(hand) {
    return hand.surrender === true;
  }

  isSurrendered() {
    return this.surrender;
  }

  isBust() {
    return this.getHandValueLow() > 21;
  }

  static isBust(hand) {
    return Hand.getHandValueLow(hand) > 21;
  }

  static getHandValueLow(hand) {
    let value = 0;
    hand.forEach(card => value += card.lowValue);
    return value;
  }

  getBustedAtValue() {
    return this.getHandValueLow();
  }

  getBustedAtText() {
    return `Busted at : ${this.getBustedAtValue()}`;
  }

  getHandValueLow() {
    let value = 0;
    this.props.hand.forEach(card => value += card.lowValue);
    return value;
  }

  getHandValueHigh() {
    let value = 0;
    this.props.hand.forEach(card => value += card.highValue);
    return value;
  }

  getAceCount() {
    let result = 0;
    this.props.hand.forEach(card => {
      if (card.face === "ace") {
        result += 1;
      }
    });

    return result;
  }

  getLowAceValue() {
    return this.getAceCount();
  }

  getHighAceValue() {
    let aceCount = this.getAceCount();
    if (aceCount <= 0) return 0;
    if (aceCount === 1) return 11;

    return 10 + aceCount;

  }

  static getBestHandValue(hand) {
    let value = 0;

    hand.forEach(card => {
      if (card.face !== "ace") {
        value += card.highValue;
      }
    });

    return Hand.getHighAceValue(hand) + value <= 21 ? Hand.getHighAceValue(hand) + value :
      Hand.getLowAceValue(hand) + value;
  }

  static getAceCount(hand) {
    let result = 0;
    hand.forEach(card => {
      if (card.face === "ace") {
        result += 1;
      }
    });

    return result;
  }

  static getLowAceValue(hand) {
    return Hand.getAceCount(hand);
  }

  static getHighAceValue(hand) {
    let aceCount = Hand.getAceCount(hand);
    if (aceCount <= 0) return 0;
    if (aceCount === 1) return 11;

    return 10 + aceCount;

  }


  
  getBestHandValue() {
    let value = 0;
    
    this.props.hand.forEach(card => {
      if (card.face !== "ace") {
        value += card.highValue;
      }
    });

    return this.getHighAceValue() + value <= 21 ? this.getHighAceValue() + value :
      this.getLowAceValue() + value;
  }

  getHandWidth(cardWidth) {
    return ((this.count() - 1) * 20 + cardWidth + 2);
  }


  setStanding(standing) {
    this.setState({
      standing
    });
  }

  setDoubling(doubling) {
    this.setState({
      doubling 
    });
  }

  setSurrendered(surrended) {
    this.setState({
      surrender : surrended
    });
  }

  split() {

  }

  double(card) {
    
    this.doubling();
    this.standing();
  }

 

  canAcceptCard() {
    return this.state.standing === false && this.state.surrender === false;
  }

  canDouble() {
    return false;
  }

  surrender() {
    this.setSurrendered(true);
  }

  stand() {
    this.setStand(true);
  }

  dump() {
    console.log(this.getTextHand());
  }


  render() {
    return (
      <>
        {this.props.hand.map((card, index) => {
           console.log(index); 
           return <Card key={index} card={card} reveal={index > 0 || this.props.reveal} />
        })}
      </>
    );
  };
}
