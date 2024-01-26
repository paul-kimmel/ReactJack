import * as PlayState from './PlayState';

export default class StatisticsData {
  constructor() {

    this.surrendered = 0;
    this.wins = 0;
    this.losses = 0;
    this.pushes = 0;
    this.averageWonPerHand = 0;
    this.averageLostPerHand = 0;
    this.netWinLostPerHand = 0;
    this.totalWon = 0;
    this.totalLoss = 0;
    this.netWonLost = 0;
    this.winPercentage = 0;
    this.lossPercentage = 0;
    this.blackJackPercentage = 0;
    this.dataPoints = [];
  }

  addDataPoint(dataPoint) {
    this.dataPoints.push(dataPoint);
  }

  getCount(playState) {
    if (this.dataPoints.length === 0) return 0;
    let count = 0;

    this.dataPoints.forEach(dataPoint => {
      if(dataPoint.playState === playState) {
        count += 1;
      }
    });

    return count;
  }

  getSurrenders() {
    return this.getCount(PlayState.SURRENDER);
  }

  getWins() {
    return this.getCount(PlayState.WIN);
  }

  getLosses() {
    return this.getCount(PlayState.LOSE);
  }

  getPushes() {
    return this.getCount(PlayState.PUSH);
  }

  getAverageAmountWon() {
    return this.getWins() === 0 ? 0 : this.getTotalAmountWon() / this.getWins();
  }

  getAverageAmountLoss() {
    return this.getLosses() === 0 ? 0 : this.getTotalAmountLoss() / this.getLosses();
  }

  getSum(playState) {

    let sum = 0.0;
    this.dataPoints.forEach(dataPoint => {
      if (dataPoint.playState === playState) {
        sum += dataPoint.change;
      }
    });

    return sum;
  }

  count() {
    return this.dataPoints.length;
  }


  getTotalAmountWon() {
    return this.getSum(PlayState.WIN);
  }

  getTotalAmountLoss() {
    return this.getSum(PlayState.LOSE);
  }

  getPercentageOfWins() {
    return this.count() === 0 ? 0 : this.getWins() / this.count() * 100;
  }

  getPercentageOfLosses() {
    return this.count() === 0 ? 0 : this.getLosses() / this.count() * 100;
  }

  getPercentageOfPushes() {
    return this.count === 0 ? 0 : this.getPushes() / this.count() * 100;
  }

  getNetAverageWinLoss() {
    return this.getWins() + this.getLosses() ? 0 : (this.getAverageAmountWon() * this.getWins())
      + (this.getAverageAmountLoss() * this.getLosses()) / (this.getWins() + this.getLosses());
  }

  getNetWinLoss() {
    return this.getTotalAmountWon() + this.getTotalAmountLoss();
  }

  getBlackJacks() {
    let count = 0;
    this.dataPoints.forEach(dataPoint => {
      if (dataPoint.isBlackJack) {
        count += 1;
      }
    });
    return count;
  }

  getPercentageOfBlackJacks() {
    return this.count() === 0 ? 0 : this.getBlackJacks() / this.count() * 100;
  }


}


export class DataPoint {
  // eslint-disable-next-line no-useless-constructor
  constructor(playState, isBlackJack, bet, money, change) {
    
    this.playState = playState;
    this.isBlackJack = isBlackJack;
    this.bet = bet;
    this.money = money;
    this.change = change;
  }
}



