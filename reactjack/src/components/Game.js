import React, { Component } from 'react';
import Statistics from './Statistics';
import StatisticsData, {DataPoint} from './StatisticsData';
import { Decks } from './Decks';
import { Dealer } from './Dealer';
import { Player } from './Player';
import Footer from './Footer';
import Options from './Options';
import Hint from './Hint';
import Recorder from './Recorder';
import PlayDecisionEngine from './PlayDecisionEngine';
import './Game.css';

export default class Game extends Component {
  static displayname = Game.name;

  constructor(props) {
    super(props);

    this.playerRef = React.createRef();
    this.dealerRef = React.createRef();

    this.decks = new Decks(6);
    

    this.state =
    {
      isGameOver: false,
      isNewGame: true,
      numberOfPlayers: 1,
      dealerHand: this.getHand(),
      playerHands: [this.getHand()],
      options: new Options(),
      recorder: new Recorder(),
      currentIndex: 0,
      playerBestHand: 0,
      playerBet: 25,
      playerBalance: 500,
      dealerCard: '',
      hint: 'None',
      reveal: false,
      statisticsData: new StatisticsData()
    };

    
  }

  newGame() {
    if (this.canPlayNewGame()) {

      //defacto deal
      this.setState({
        isGameOver: false,
        isNewGame: true,
        numberOfPlayers: 1,
        dealerHand: this.getHand(),
        playerHands: [this.getHand()],
        options: new Options(),
        recorder: new Recorder(),
        currentIndex: 0,
        playerBestHand: 0,
        dealerCard: '',
        hint: 'None',
        reveal: false,
      }, () => this.init());
    }
  }

  dealSplitGame() {
    if (this.canPlayNewGame()) {

        this.setState({
          isGameOver: false,
          isNewGame: true,
          numberOfPlayers: 1,
          dealerHand: this.getHand(),
          playerHands: [this.getSplitHand()],
          options: new Options(),
          recorder: new Recorder(),
          currentIndex: 0,
          playerBestHand: 0,
          dealerCard: '',
          hint: 'None',
          reveal: false,
        }, () => this.init());
    }
  }

  componentDidMount() {
    this.init();
  }

  canPlayNewGame() {
    return this.state.playerBalance >= this.state.playerBet;
  }
    
  
  init() {
    const hands = this.state.playerHands;
    hands[this.getCurrentIndex()].totalBet = this.state.playerBet;

    this.setState({
      playerHands: hands
    });

    this.checkRecording();
    this.updateStatus();
    this.checkEndGame();
  
  }

  updateStatus() {
    this.setState({

      playerBestHand: this.getBestHandValue(this.getCurrentHand()),
      dealerCard: this.getDealerCardOrHand(),
      hint: Hint.getHint(this.getDealerHand(), this.getCurrentHand())

    });
  }

  getDealerCardOrHand() {
    return this.state.reveal === true ? this.getBestHandValue(this.state.dealerHand) :
      this.state.dealerHand[1].toString();
  }

  checkRecording() {
    //add recording for stats
    //if(options.recordPlay){ startRecording();}
  }

  startRecording() {
    // if recorder== null create one 
  }

  stopRecording() {
    if (this.state.recorder) {
      //recorder write to file
      //this.setState({ recorder: undefined });
    }
  }

  record() {
    if (this.state.recorder) {
      this.state.recorder.record();
    }
  }

  getOptions() {
    return this.state.Options;
  }

  deal() {

    this.setState({
      dealerHand: this.getHand(),
      playerHands: [this.getHand()]

    });

  }

  async dealToDealer() {
    await this.setState({
      dealerHand: [...this.state.dealerHand, this.getNextCard()]
    });
  }

  getPlayState(hand) {

    return PlayDecisionEngine.getPlayState(this.state.dealerHand, hand);
  }

  getDealerHand() {
    return this.state.dealerHand;
  }

  getPlayer() {
    return this.playerRef.current;
  }

  getDealer() {
    return this.dealerRef.current;
  }

  getHand() {
    return [this.getNextCard(), this.getNextCard()];
  }

  getSplitHand(){
    return this.decks.getPair();
  }



  getNextCard() {
    return this.decks.getNextCard();
  }


  incrementCurrentIndex() {

    const hands = this.state.playerHands;
    hands[this.getCurrentIndex()].playState = "";
    hands[this.getCurrentIndex() + 1].playState = "current"

    this.setState((previous, props) => ({
      currentIndex: previous.currentIndex + 1,
      playerHands: hands
    }));

  }


  nextHand() {
  if (this.getCurrentIndex() < this.state.playerHands.length - 1) {
      this.incrementCurrentIndex()
      return true;
    }
    return false;
  }

  isNewGame() {
    return this.state.isNewGame;
  }

  isGameOver() {
    return this.state.isGameOver;
  }


  canDealToCurrentHand() {
    return this.isGameOver() === false &&
      this.isStanding(this.getCurrentHand()) === false &&
      this.isBust(this.getCurrentHand()) === false;
      
  }

  canSplitCurrentHand() {
    
    return this.isGameOver() === false &&
      this.getCurrentHand().length === 2 &&
      this.getCurrentHand()[0].face === this.getCurrentHand()[1].face &&
      this.canIncreaseBet();
  }

  //not used
  canSplit(index) {
    return this.getHand(index).canSplit &&
      this.canIncreaseBet(this.getHand(index).getCurrentBet());
  }

  canDoubleCurrentHand() {
    
    return this.isGameOver() === false &&
      this.getCurrentHand().length === 2 && this.canIncreaseBet();
  }

  canIncreaseBet() {
    return (this.getTotalBet() + this.state.playerBet) <= this.state.playerBalance;
  }

  getTotalBet() {
    let total = 0;
    this.state.playerHands.forEach(hand => {
      total += hand.totalBet;
    });

    return total;
  }

  isPlayersOnlyHand() {
    return this.state.playerHands.length === 1;
  }

  canSurrenderCurrentHand() {
    return this.isGameOver() === false &&
      this.isPlayersOnlyHand() &&
      PlayDecisionEngine.canSurrenderCurrentHand(this.getCurrentHand());
  }

  doubleCurrentHand() {
    if (this.canDoubleCurrentHand() === false) return;

    let hands = this.state.playerHands;
    const hand = hands[this.getCurrentIndex()];
    hand.double = true;
    hand.totalBet *= 2;

    this.setState({
      playerHands: hands
    });

    this.dealToPlayer();
    this.nextSteps();
  }

  double() {

    if (this.canDoubleCurrentHand() === false) return;
    this.doubleCurrentHand();
    this.record();

  }

  surrender() {
    if (this.canSurrenderCurrentHand() === false) return;
    this.surrenderCurrentHand();
    this.nextSteps();
    this.record();
  }

  surrenderCurrentHand() {
    const hands = this.state.playerHands;
    hands[this.getCurrentIndex()].playState = "surrender";
    this.setState({
      playerHands : hands
    });
  }

  decreaseBet() {
    if (this.isGameOver() && (this.state.playerBet - 25 > 0)) {

      this.setState((previous, props) => ({
        playerBet: previous.playerBet - 25
      }));

      this.record();
    }
  }


  increaseBet() {
    if (this.isGameOver() && this.canIncreaseBet() ) {
      this.setState((previous, props) => ({
        playerBet : previous.playerBet + 25
      }));
      
      this.record();
    }
  }


  hit() {
    if (this.isGameOver() === true) {
      this.newGame();
    }
    else {
      if (this.canDealToCurrentHand()) {
        this.dealToPlayer();
        this.record();

        if (this.isBust()) {
          this.nextSteps();
        }
      }
    }
    
  }

  stand() {
    this.standCurrentHand();
    this.record();
  }

  isStanding(hand) {
    return hand.standing === true;
  }

  isBust() {
    return PlayDecisionEngine.isBust(this.getCurrentHand());
  }

  getBestHandValue(hand) {
    return PlayDecisionEngine.getBestHandValue(hand);
  }

  isSurrendered(hand) {
    console.log(hand);
    return hand.playState === "surrender";
    
  }

  isBlackJack(hand) {
    return PlayDecisionEngine.isBlackJack(hand);
  }
  
  
  dealToPlayer() {

    let hands = this.state.playerHands;
  
    hands[this.getCurrentIndex()].push(this.getNextCard());

    this.setState({
      playerHands: hands
    }, () => this.updateStatus());
  }

  getCurrentIndex() {
    return this.state.currentIndex;
  }

  getCurrentHand() {
    return this.state.playerHands[this.getCurrentIndex()];
  }

//stopped: splits occassionally deal out dealer before I finish playing hands
//stopped: split hand isn't paying wins correctly


  split() {
    if (this.canSplitCurrentHand()) {
      this.splitCurrentHand();
      this.record();
    }
  }

  getHint() {
    if (this.state.options.hintsEnabled) {
      return `Hint: ${this.hints.getHintText(this.getDealer(), this.getCurrentIndex())}`;
    }
    else {
      return "Hints Off";
    }
  }

  dump() {

    console.log(`Dealer=${this.getDealer().getTextHand()}, value=${this.getDealer().getBestValue()}`);
    this.getPlayer().dump();   
  }

  checkEndGame() {
    if (this.isBlackJack(this.getDealerHand()) || this.isBlackJack(this.getCurrentHand())) {
      this.endGame();
    }
  }

  async endGame() {
    this.setState({
      reveal: true
    });

    await this.playDealerHand();
    this.decidePlay();

    this.updateStatus();

    this.setGameOver();
  }

  setGameOver() {
    this.setState({
      isGameOver: true
    });
  }



  needToDraw() {

    return this.state.playerHands.every((hand) => 
      this.isBust(hand) === false && this.isSurrendered(hand) === false && 
        this.isBlackJack(hand) === false);
  }

  async playDealerHand() {
    if (this.needToDraw()) {

      let hand = this.state.dealerHand;

      while (this.isBust(hand) === false && this.getBestHandValue(hand) < 17)
      {
        await this.dealToDealer();
        hand = this.state.dealerHand;
      }
    }
  }

  decidePlay() {

    let change = 0;
    let hands = this.state.playerHands;
    const data = this.state.statisticsData;

    // eslint-disable-next-line array-callback-return
    this.state.playerHands.map((hand, index) => {

      let playState = this.getPlayState(hand);
      hands[index].playState = playState;

      change += Number(PlayDecisionEngine.getChange(this.getPlayer(), hand));
      console.log(`change: ${change}`);

      data.addDataPoint(new DataPoint(playState, this.isBlackJack(hand), this.getPlayer().getCurrentBet(), this.state.playerBalance, change));
    });

    this.setState((previous, props) => ({
      playerHands: hands,
      playerBalance: previous.playerBalance + change,
      statisticsData : data
    }));

  }

  
  standCurrentHand() {

    try {
      let index = this.getCurrentIndex();
      let hands = this.state.playerHands;
      hands[index].standing = true;
      this.setState({
        playerHands: hands
      });
      this.nextSteps();
    }
    catch (e) {
      console.log(`standCurrentHand: ${e}`);
    }
  }

  removeAt(array, index) {
    try {
      return array.splice(index, 1);
    }
    catch (e) {
      console.log(e);
    }
  }

  splitCurrentHand() {
    if (this.canSplitCurrentHand()) {

      const index = this.getCurrentIndex();

      //slice the second card
      let hands = this.state.playerHands;
      const cardToSeedNewHand = this.removeAt(hands[index], 1);

      hands = [...hands.slice(index, 1), cardToSeedNewHand, ...hands.slice(index+1)];
      
      hands[index+1].playState = "";
      hands[index+1].totalBet = this.state.playerBet;

      this.setState({
        playerHands: hands
      });
    }
  }

  nextSteps() {
    if (this.nextHand() === false) {
      this.endGame();
    }
  }
  render() {
      return (
        <>
          <Statistics statistics={this.state.statisticsData} />
        <div className="game-table">
        
        <div>
            <Dealer ref={this.dealerRef} hand={this.state.dealerHand} reveal={this.state.reveal}
              /> 
            
        </div>
        <div>
              <Player ref={this.playerRef} hands={this.state.playerHands} playerBet={this.state.playerBet} playerBalance={this.playerBalance}  />
         </div>
      </div>
          <Footer playerBestHand={this.state.playerBestHand}
            playerBet={this.state.playerBet} playerBalance={this.state.playerBalance}
          dealerCard={this.state.dealerCard} hint={this.state.hint} />
      </>
    )
  }
}
