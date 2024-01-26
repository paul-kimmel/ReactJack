import React, { Component } from 'react';
import "./Card.css";

export class Card extends Component {
  static displayName = Card.name;

  constructor(props) {
    super(props);

    
    console.log(`Card passed to ctor ${this.props.card.face}`);
  }

  textCardValue() {
    console.log("textCardValue called");
    return this.props.card.toString();
  }


  render() {
    return (
      <div className="single-card">
        <img src={this.props.reveal ? this.props.card.url : this.props.card.back} alt="card" />
      </div>
    );
  }

}