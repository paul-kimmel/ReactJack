import React, { Component } from 'react';
import { DealerHand } from './DealerHand';
export class Dealer extends Component{

  constructor(props) {
    super(props);

    this.dealerHandRef = React.createRef();

    this.state = {
      name: "Dealer"
    }
    
  }
    
  render() {
    return (
      <>
        <DealerHand ref={this.dealerHandRef} hand={this.props.hand} reveal={this.props.reveal} />
        
      </>
    );
  }
}