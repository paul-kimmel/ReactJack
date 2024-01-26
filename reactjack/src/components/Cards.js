import acespades from "./images/AS.png";
import twospades from "./images/2S.png";
import threespades from "./images/3S.png";
import fourspades from "./images/4S.png";
import fivespades from "./images/5S.png";
import sixspades from "./images/6S.png";
import sevenspades from "./images/7S.png";
import eightspades from "./images/8S.png";
import ninespades from "./images/9S.png";
import tenspades from "./images/10S.png";
import jackspades from "./images/JS.png";
import queenspades from "./images/QS.png";
import kingspades from "./images/KS.png";
import aceclubs from "./images/AC.png";
import twoclubs from "./images/2C.png";
import threeclubs from "./images/3C.png";
import fourclubs from "./images/4C.png";
import fiveclubs from "./images/5C.png";
import sixclubs from "./images/6C.png";
import sevenclubs from "./images/7C.png";
import eightclubs from "./images/8C.png";
import nineclubs from "./images/9C.png";
import tenclubs from "./images/10C.png";
import jackclubs from "./images/JC.png";
import queenclubs from "./images/QC.png";
import kingclubs from "./images/KC.png";
import acehearts from "./images/AH.png";
import twohearts from "./images/2H.png";
import threehearts from "./images/3H.png";
import fourhearts from "./images/4H.png";
import fivehearts from "./images/5H.png";
import sixhearts from "./images/6H.png";
import sevenhearts from "./images/7H.png";
import eighthearts from "./images/8H.png";
import ninehearts from "./images/9H.png";
import tenhearts from "./images/10H.png";
import jackhearts from "./images/JH.png";
import queenhearts from "./images/QH.png";
import kinghearts from "./images/KH.png";
import acediamonds from "./images/AD.png";
import twodiamonds from "./images/2D.png";
import threediamonds from "./images/3D.png";
import fourdiamonds from "./images/4D.png";
import fivediamonds from "./images/5D.png";
import sixdiamonds from "./images/6D.png";
import sevendiamonds from "./images/7D.png";
import eightdiamonds from "./images/8D.png";
import ninediamonds from "./images/9D.png";
import tendiamonds from "./images/10D.png";
import jackdiamonds from "./images/JD.png";
import queendiamonds from "./images/QD.png";
import kingdiamonds from "./images/KD.png";
import cardback from "./images/back.png";

export const cards = [
  {
    index: 0,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "spades",
    suit : "♠",
    url: acespades,
    back: cardback,    
    toString: () =>  "A♠" 
  },
  {
    index: 1,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "spades",
    suit: "♠",
    url: twospades,
    back: cardback,    
    toString : () => "2♠"
    
  },
  {
    index: 2,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "spades",
    suit: "♠",
    url: threespades,
    back: cardback,    
    toString: () => "3♠"
  },
  {
    index: 3,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "spades",
    suit: "♠",
    url: fourspades,
    back: cardback,    
    toString: () => "4♠"
  },
  {
    index: 4,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "spades",
    suit: "♠",
    url: fivespades,
    back: cardback,    
    toString: () => "5♠"
  },
  {
    index: 5,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "spades",
    suit: "♠",
    url: sixspades,
    back: cardback,    
    toString: () => "6♠"
  },
  {
    index: 6,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "spades",
    suit: "♠",
    url: sevenspades,
    back: cardback,    
    toString: () => "7♠"
  },
  {
    index: 7,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "spades",
    suit: "♠",
    url: eightspades,
    back: cardback,    
    toString: () => "8♠"
  },
  {
    index: 8,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "spades",
    suit: "♠",
    url: ninespades,
    back: cardback,    
    toString: () => "9♠"
  },
  {
    index: 9,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: tenspades,
    back: cardback,    
    toString: () => "10♠"
  },
  {
    index: 10,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: jackspades,
    back: cardback,    
    toString: () => "J♠"
  },
  {
    index: 11,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: queenspades,
    back: cardback,    
    toString: () => "Q♠"
  },
  {
    index: 12,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "spades",
    suit: "♠",
    url: kingspades,
    back: cardback,    
    toString: () => "K♠"
  },
  {
    index: 13,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "clubs",
    suit: "♣",
    url: aceclubs,
    back: cardback,    
    toString: () => "A♣"
  },
  {
    index: 14,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "clubs",
    suit: "♣",
    url: twoclubs,
    back: cardback,    
    toString: () => "2♣"
  },
  {
    index: 15,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "clubs",
    suit: "♣",
    url: threeclubs,
    back: cardback,    
    toString: () => "3♣"
  },
  {
    index: 16,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "clubs",
    suit: "♣",
    url: fourclubs,
    back: cardback,    
    toString: () => "4♣"
  },
  {
    index: 17,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "clubs",
    suit: "♣",
    url: fiveclubs,
    back: cardback,    
    toString: () => "5♣"
  },
  {
    index: 18,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "clubs",
    suit: "♣",
    url: sixclubs,
    back: cardback,    
    toString: () => "6♣"
  },
  {
    index: 19,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "clubs",
    suit: "♣",
    url: sevenclubs,
    back: cardback,    
    toString: () => "7♣"
  },
  {
    index: 20,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "clubs",
    suit: "♣",
    url: eightclubs,
    back: cardback,    
    toString: () => "8♣"
  },
  {
    index: 21,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "clubs",
    suit: "♣",
    url: nineclubs,
    back: cardback,    
    toString: () => "9♣"
  },
  {
    index: 22,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: tenclubs,
    back: cardback,    
    toString: () => "10♣"
  },
  {
    index: 23,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: jackclubs,
    back: cardback,    
    toString: () => "J♣"
  },
  {
    index: 24,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: queenclubs,
    back: cardback,    
    toString: () => "Q♣"
  },
  {
    index: 25,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "clubs",
    suit: "♣",
    url: kingclubs,
    back: cardback,    
    toString: () => "K♣"
  },
  {
    index: 26,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "hearts",
    suit: "♥",
    url: acehearts,
    back: cardback,    
    toString: () => "A♥"
  },
  {
    index: 27,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "hearts",
    suit: "♥",
    url: twohearts,
    back: cardback,    
    toString: () => "2♥"
  },
  {
    index: 28,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "hearts",
    suit: "♥",
    url: threehearts,
    back: cardback,    
    toString: () => "3♥"
  },
  {
    index: 29,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "hearts",
    suit: "♥",
    url: fourhearts,
    back: cardback,    
    toString: () => "4♥"
  },
  {
    index: 30,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "hearts",
    suit: "♥",
    url: fivehearts,
    back: cardback,    
    toString: () => "5♥"
  },
  {
    index: 31,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "hearts",
    suit: "♥",
    url: sixhearts,
    back: cardback,    
    toString: () => "6♥"
  },
  {
    index: 32,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "hearts",
    suit: "♥",
    url: sevenhearts,
    back: cardback,    
    toString: () => "7♥"
  },
  {
    index: 33,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "hearts",
    suit: "♥",
    url: eighthearts,
    back: cardback,    
    toString: () => "8♥"
  },
  {
    index: 34,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "hearts",
    suit: "♥",
    url: ninehearts,
    back: cardback,    
    toString: () => "9♥"
  },
  {
    index: 35,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: tenhearts,
    back: cardback,    
    toString: () => "10♥"
  },
  {
    index: 36,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: jackhearts,
    back: cardback,    
    toString: () => "J♥"
  },
  {
    index: 37,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: queenhearts,
    back: cardback,    
    toString: () => "Q♥"
  },
  {
    index: 38,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "hearts",
    suit: "♥",
    url: kinghearts,
    back: cardback,    
    toString: () => "K♥"
  },

  {
    index: 39,
    face: "ace",
    lowValue: 1,
    highValue: 11,
    textSuit: "diamonds",
    suit: "♦",
    url: acediamonds,
    back: cardback,    
    toString: () => "A♦"
  },
  {
    index: 40,
    face: "two",
    lowValue: 2,
    highValue: 2,
    textSuit: "diamonds",
    suit: "♦",
    url: twodiamonds,
    back: cardback,    
    toString: () => "2♦"
  },
  {
    index: 41,
    face: "three",
    lowValue: 3,
    highValue: 3,
    textSuit: "diamonds",
    suit: "♦",
    url: threediamonds,
    back: cardback,    
    toString: () => "3♦"
  },
  {
    index: 42,
    face: "four",
    lowValue: 4,
    highValue: 4,
    textSuit: "diamonds",
    suit: "♦",
    url: fourdiamonds,
    back: cardback,    
    toString: () => "4♦"
  },
  {
    index: 43,
    face: "five",
    lowValue: 5,
    highValue: 5,
    textSuit: "diamonds",
    suit: "♦",
    url: fivediamonds,
    back: cardback,    
    toString: () => "5♦"
  },
  {
    index: 44,
    face: "six",
    lowValue: 6,
    highValue: 6,
    textSuit: "diamonds",
    suit: "♦",
    url: sixdiamonds,
    back: cardback,    
    toString: () => "6♦"
  },
  {
    index: 45,
    face: "seven",
    lowValue: 7,
    highValue: 7,
    textSuit: "diamonds",
    suit: "♦",
    url: sevendiamonds,
    back: cardback,    
    toString: () => "7♦"
  },
  {
    index: 46,
    face: "eight",
    lowValue: 8,
    highValue: 8,
    textSuit: "diamonds",
    suit: "♦",
    url: eightdiamonds,
    back: cardback,    
    toString: () => "8♦"
  },
  {
    index: 47,
    face: "nine",
    lowValue: 9,
    highValue: 9,
    textSuit: "diamonds",
    suit: "♦",
    url: ninediamonds,
    back: cardback,    
    toString: () => "9♦"
  },
  {
    index: 48,
    face: "ten",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: tendiamonds,
    back: cardback,    
    toString: () => "10♦"
  },
  {
    index: 49,
    face: "jack",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: jackdiamonds,
    back: cardback,    
    toString: () => "J♦"
  },
  {
    index: 50,
    face: "queen",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: queendiamonds,
    back: cardback,    
    toString: () => "Q♦"
  },
  {
    index: 51,
    face: "king",
    lowValue: 10,
    highValue: 10,
    textSuit: "diamonds",
    suit: "♦",
    url: kingdiamonds,
    back: cardback,    
    toString: () => "K♦"
  },

];