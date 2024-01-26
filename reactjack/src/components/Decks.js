import { cards } from './Cards';
export class Decks{
  constructor(deckCount) {

    if (deckCount <= 0) {
      throw new Error(`Invalid deck count ${deckCount}`);
    }

    this.deckCount = deckCount;
    this.cardList = [];
    this.initialize();
  }

  initialize() {
   // console.log("initializing...");
    this.addDecks();
    this.shuffle();
   //console.log("finished initlaizing");
  }

  addDecks() {
    for (let i = 0; i < this.deckCount; i++) {
      this.cardList.push(...cards);
    }
  }

  shuffle() {
    /* Fisher-Yates shuffler */
    if (this.cardList.length === 0) {
      throw new Error(`Invalid deck count this.cardList.length`); 
    }

    let current = this.cardList.length, random;

    while (current !== 0) {

      random = Math.floor(Math.random() * current);
      current--;

      [this.cardList[current], this.cardList[random]] = [
        this.cardList[random], this.cardList[current]];
    }

  }

  remove(card) {
    this.removeAt(this.cardList.indexOf(card));
  }

  removeAt(index) {
    try {
      return this.cardList.splice(index, 1);
    }
    catch (e) {
      console.log(e);
    }
  }

  getPair() {
    const card1 = this.getNextCard();

    for (let i = 0; i < this.cardList.length; i++) {
      let result = this.get(i);

      if (card1.face === result.face) {
        this.removeAt(i);
        return [card1, result];
      }
    }

    throw new Error("No matching card for split hand");
  }

  get(index) {
    return this.cardList[index];
  }

  count() {
    return this.cardList.length;
  }

  getNextCard() {
    console.log(`getNextCard called, remaining cards: ${this.count()}`);

    if (this.count() === 0) this.initialize();
    let result = this.get(0);
    this.removeAt(0);
    return result;
  }


  moreCards() {
    return this.cardList.length > 0;
  }

  dump(limit) {
    if (limit === undefined) {
      limit = this.cardList.length;
    }

    for (let i = 0; i < this.cardList.length && i < limit; i++) {
      console.log(this.get(i).face);
    }
  }

}