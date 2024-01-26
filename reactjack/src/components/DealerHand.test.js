import React from 'react';
import { render } from 'react-dom';
import { DealerHand } from "./DealerHand";
import { cards } from "./cards";

it('getHandRef Test', async () => {

  //react 17
  let container = document.createElement("div");
  const dealerHand = render(<DealerHand hand={[cards[0], cards[9]]} />, container);

  const hand = dealerHand.getHand();
  console.log(`Text Hand: ${hand.getTextHand()}`);
  console.log(`Is Black Jack: ${hand.isBlackJack()}`);
  expect(hand.isBlackJack()).toBe(true);

});