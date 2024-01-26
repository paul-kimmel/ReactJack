/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { cards } from './Cards';

class Card extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {this.props.card.toString()}
      </div>

    );

  }
}

class Hand extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

      return(
        this.props.hand.map(card => {
          return (<Card card={card} />);
        })
      )
  }
}

export default class DemoHand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hand hand={[cards[13], cards[14]]} />
    )
  }
}
