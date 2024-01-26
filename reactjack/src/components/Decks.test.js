import { Decks } from './Decks';

it("Decks Test", async () => {
  const decks = new Decks(3);
  console.log(`deck count is ${decks.deckCount}`);
  expect(decks.deckCount).toBe(3);
  console.log(`deck count is ${decks.deckCount}`);
});

it("Total Card Count", async () => {
  const decks = new Decks(6);
  expect(decks.cardList.length).toBe(decks.deckCount * 52);
  console.log(`decks: ${decks.deckCount} and total number of cards: ${decks.cardList.length}`);
});

it("First Card Test", async () => {
  const decks = new Decks(6);

  const card = decks.cardList[0];

  expect(card.suit).toEqual(card.suit);
  
  console.log(`first card is ${decks.get(0).face}`);

});

it("Test invalid deck count", async () => {
  const t = () => {
    new Decks(0)
  };

  expect(t).toThrow(Error);
  console.log("Invalid deck count threw error");
 
});

it("get Test", async () => {
  const decks = new Decks(1);

  const card = decks.get(3);
  console.log(`get Test ${card.face}`);
  expect(decks.get(3).face).toEqual(card.face);
  
});


it("getNextCard Test", async () => {
  const decks = new Decks(1);
  const card = decks.getNextCard();
  console.log(`get(ting)NextCard: ${card.suit}`);
  expect(card.suit).toEqual(card.suit);
});


it("shuffle Test", async () => {
  const decks = new Decks(1);
  console.log("shuffle Test");
  expect(decks.get(0).url === "./images/AS.png").toBeFalsy();
});

it("Dump Test", async () => {

  console.log("Dumping a single deck");
  const decks = new Decks(1);
  decks.dump(5);

});

it("Test moreCards", async () => {
  console.log("Calling moreCards");
  const decks = new Decks(1);
  decks.getPair();
  expect(decks.moreCards()).toEqual(true);

});


it("Test getPair", async () => {
  console.log("Testing getPair");
  const decks = new Decks(1);
  const pair = decks.getPair();

  expect(pair[0].face).toEqual(pair[1].face);

});