import { Hand } from './Hand.js'
import { cards } from './Cards';

it("Hand.test.js", async () => {

  console.log("Running hand.test.js");

});

it("Add Card Test", async () => {

  const hand = new Hand({ hand : [cards[0], cards[1], cards[2]]});

  console.log(`Hand: count(${hand.count()}) ${hand.getTextHand()}`);
  expect(hand.count()).toBe(3);
  expect(hand.getTextHand()).toEqual("A♠2♠3♠");

});

it("Test getTextHand", async () => {

  const hand = new Hand({ hand: [cards[0], cards[13]] });
  console.log(hand.getTextHand());
  expect(hand.getTextHand()).toEqual("A♠A♣");

});

it("Count Number of Cards In Hand", () => {
  const hand = new Hand({ hand: [cards[0], cards[13], cards[41]] });
  console.log(hand.count());
  expect(hand.count()).toBe(3);
});
