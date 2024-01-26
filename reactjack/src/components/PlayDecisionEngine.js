

import * as PlayStates from "./PlayState";

export default class PlayDecisionEngine{

  static getPlayState(dealerHand, playerHand) {

    if (PlayDecisionEngine.isSurrendered(playerHand)) {
      return PlayStates.SURRENDER;
    }

    if (PlayDecisionEngine.isPush(dealerHand, playerHand)) {
      return PlayStates.PUSH;
    }

    if (PlayDecisionEngine.isWin(dealerHand, playerHand)) {
      return PlayStates.WIN;
    }

    return PlayStates.LOSE;
  }

  

  static isSurrendered(playerHand) {
    return playerHand.playState === PlayStates.SURRENDER;
  }

  static isPush(dealerHand, playerHand) {

    return PlayDecisionEngine.isBust(dealerHand) === false && PlayDecisionEngine.isBust(playerHand) === false
      && PlayDecisionEngine.getBestHandValue(playerHand) === PlayDecisionEngine.getBestHandValue(dealerHand)
      && PlayDecisionEngine.isBlackJack(playerHand) === false;
  }

  static isWin(dealerHand, playerHand) {
    return PlayDecisionEngine.isBlackJack(playerHand)
      || (PlayDecisionEngine.isBust(playerHand) === false
      && (PlayDecisionEngine.getBestHandValue(playerHand) > PlayDecisionEngine.getBestHandValue(dealerHand)
      || PlayDecisionEngine.isBust(dealerHand)));
  }

  static isBust(hand) {
    return PlayDecisionEngine.getHandValueLow(hand) > 21;
  }

  static getHandValueHigh(hand) {
    let value = 0;
    hand.forEach(card => value += card.highValue);
    return value;
  }

  static getHandValueLow(hand) {
    let value = 0;
    hand.forEach(card => value += card.lowValue);
    return value;
  }

  static getBestHandValue(hand) {
    let value = 0;

    hand.forEach(card => {
      if (card.face !== "ace") {
        value += card.highValue;
      }
    });

    return PlayDecisionEngine.getHighAceValue(hand) + value <= 21 ? PlayDecisionEngine.getHighAceValue(hand) + value :
      PlayDecisionEngine.getLowAceValue(hand) + value;
  }

  static getHighAceValue(hand) {
    let aceCount = PlayDecisionEngine.getAceCount(hand);
    if (aceCount <= 0) return 0;
    if (aceCount === 1) return 11;

    return 10 + aceCount;

  }

  static getAceCount(hand) {
    let result = 0;
    hand.forEach(card => {
      if (card.face === "ace") {
        result += 1;
      }
    });

    return result;
  }

  static getLowAceValue(hand) {
    return PlayDecisionEngine.getAceCount(hand);
  }

  static isBlackJack(hand) {
    return hand.length === 2 && PlayDecisionEngine.getHandValueHigh(hand) === 21;
  }

  static canSurrenderCurrentHand(hand) {
    return hand.length === 2;
  }

  static getChange(player, hand) {

    const playstate = hand.playState;

    switch (playstate) {
      case PlayStates.LOSE:
        return hand.double ? -2 * player.getCurrentBet() : -1 * player.getCurrentBet();

      case PlayStates.PUSH:
        return 0;

      case PlayStates.WIN:
        return PlayDecisionEngine.isBlackJack(hand) ? (6 / 5) * player.getCurrentBet() :
          (hand.double === true ? 2 * player.getCurrentBet() : player.getCurrentBet() );

      case PlayStates.SURRENDER:
        return Math.round(-0.5 * player.getCurrentBet());
      default:
        return 0;
    }
    
  }

}