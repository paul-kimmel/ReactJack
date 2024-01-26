/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
  constructor(props){
    super(props);

    
  }

  currencyFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  render(){
    return (
      <footer className="footer">
        <div><span>Player: {this.props.playerBestHand}</span></div>
        <div><span>Bet: {this.currencyFormat.format(this.props.playerBet)}</span></div>
        <div><span>Balance: {this.currencyFormat.format(this.props.playerBalance)}</span></div>
        <div><span>Dealer: {this.props.dealerCard}</span></div>
        <div><span>Hint: {this.props.hint}</span></div>
      </footer>
    
    )
  }

}