import React, { Component, forwardRef, useRef, createRef, useImperativeHandle } from 'react';
import { cards } from './Cards';

const HandWrapper = forwardRef((props, ref) => {
  const inputRef = useRef(null);


  useImperativeHandle(ref, () => ({
    getHandValue: () => getHandValue(),
    value: inputRef.current.value
  }));

  function getHandValue() {
    console.log("Here I are");
    let result = 0;
    props.hand.map(card => {
      result += card.highValue;
    });
    return result;
  }

  return (
    <span>
      <Hand hand={props.hand} ref={inputRef} />
    </span>
  );
});

/* eslint-disable no-useless-constructor */

export class Card extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <span>
        {this.props.card.toString()}
      </span>

    );

  }
}

export class Hand extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    console.log(`Hand props: ${this.props}`);

  }

  render() {
    return (
      <span>
        {this.props.hand.map((card, index) => {
          return (<Card key={index} card={card} />);
        })}
      </span>
    )
  }
}

export class PlayerHand extends Component {
  constructor(props) {
    super(props);

    this.childRef = createRef();
    console.log(`PlayerHand props: ${props}`);
    
  }

  componentDidMount() {
    console.log(`PlayerHandsy: ${this.getHand()}`);
  }

  getHand() {
    return this.childRef.current.getHandValue();
  }


  render() {
    console.log(`PlayerHand render ${this.props.hand}`);
    return (
      <div>
        <HandWrapper hand={this.props.hand} ref={this.childRef} />
      </div>
    )
  }
}

export class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(`Player render: ${this.state.playerHands[0]}`);

    return (
      this.props.hands.map((hand, index) => {
        return (<PlayerHand key={index} hand={hand} />)
      })
    )
  }
}

export default class DemoObject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Player hands={[[cards[13], cards[14]], [cards[2], cards[30]]]} />
    )
  }
}
