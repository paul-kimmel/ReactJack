import React, { Component } from 'react';
import { Card } from './Card';

export class Hand extends Component {

  static displayName = Hand.name;
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }


  count() {
    return this.props.hand.length;
  }


  getTextHand() {

    let result = "";
    this.props.hand.map((item) => result = result.concat(`${item.toString()}`));
    return result;

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
