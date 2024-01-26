import { Hand } from './Hand.js'
import { cards } from  './Cards';

it("Hand.test.js", async () => {

  console.log("Running hand.test.js");

});

it("Add Card Test", async () => {

  const hand = new Hand();
  hand.addRange([cards[0], cards[1], cards[2]]);
  
  console.log(`Hand: count(${hand.count()}) ${hand.getTextHand()}`);
  expect(hand.count()).toBe(3);
  expect(hand.getTextHand()).toEqual("A♠2♠3♠");

});

it("Test getTextHand", async () => {

  const hand = new Hand();
  hand.add(cards[0]);
  hand.add(cards[13]);
  console.log(hand.getTextHand());
  expect(hand.getTextHand()).toEqual("A♠A♣");

});

it("Test getHandLowValue", async () => {

  const hand = new Hand();
  hand.add(cards[0]);
  hand.add(cards[13]);
  console.log(`Hand Low Value: ${hand.getHandValueLow()}`);
  expect(hand.getTextHand()).toEqual("A♠A♣");
  expect(hand.getHandValueLow()).toBe(2);

});

it("Test getHandValueHigh", async () => {

  const hand = new Hand();
  hand.add(cards[0]);
  hand.add(cards[13]);
  console.log(`Hand High Value: ${hand.getHandValueHigh()}`);
  expect(hand.getTextHand()).toEqual("A♠A♣");
  expect(hand.getHandValueHigh()).toBe(22);

});

it("Test getBestHandValue", async () => {

  const hand = new Hand();
  hand.add(cards[0]);
  hand.add(cards[13]);
  hand.add(cards[9]);
  console.log(`getTextHand ${hand.getTextHand()}`);
  expect(hand.getTextHand()).toEqual("A♠A♣10♠");

  console.log(`getBestHandValue ${hand.getBestHandValue()}`);
  expect(hand.getBestHandValue()).toBe(12);

});