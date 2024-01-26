import React, { Component } from 'react';
import './Statistics.css';

function Surrendered(props) {

  return <div><span>Surrendered: {props.surrendered ?? "0"}</span></div>;
}

function Wins(props) {

  return <div><span>Wins: {props.wins ?? "0"}</span></div>;
}

function Losses(props) {
  return <div><span>Losses: {props.losses ?? "0"}</span></div>;
}

function Pushes(props) {
  return <div><span>Pushes: {props.pushes ?? "0"}</span></div>;
}

function AverageWonPerHand(props) {
  return <div><span>Average won per hand: {props.averageWonPerHand.toFixed(2) ?? "0"}</span></div>;
}

function AverageLostPerHand(props) {
  return <div><span>Average lost per hand: {props.averageLostPerHand.toFixed(2) ?? "0"}</span></div>;
}

function NetWinLossPerHand(props) {
  return <div><span>Net won/lost per hand: {props.netWinLostPerHand ?? "0"}</span></div>;
}

          
function TotalWon(props) {
  return <div><span>Total won: {props.totalWon ?? "0"}</span></div>;
}

function TotalLoss(props) {
  return <div><span>Total lost: {props.totalLoss ?? "0"}</span></div>;
}

function NetWonLost(props) {
  return <div><span>Net Won/Lost: {props.netWonLost ?? "0"}</span></div>;
}

function WinPercentage(props) {
  return <div><span>Percentage of wins: {props.winPercentage.toFixed(2) ?? "0"}</span></div>;
}

function LossPercentage(props) {
  return <div><span>Percentage of losses: {props.lossPercentage.toFixed(2) ?? "0"}</span></div>;
}

function BlackJackPercentage(props) {
  return <div><span>BlackJack percentage: {props.blackJackPercentage.toFixed(2) ?? "0"}</span></div>;
}

        

export default class Statistics extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="statistics">
        <div className="statistics-header">Statistics</div>
        <div className="statistics-details">
          <Surrendered surrendered={this.props.statistics.getSurrenders()} />
          <Wins wins={this.props.statistics.getWins()} />
          <Losses losses={this.props.statistics.getLosses()}/>
          <Pushes pushes={this.props.statistics.getPushes()} />
          <AverageWonPerHand averageWonPerHand={this.props.statistics.getAverageAmountWon()}  />
          <AverageLostPerHand averageLostPerHand={this.props.statistics.getAverageAmountLoss()}  />
          <NetWinLossPerHand netWinLostPerHand={this.props.statistics.getNetWinLoss()}  />
          <TotalWon totalWon={this.props.statistics.getTotalAmountWon()} />
          <TotalLoss totalLoss={this.props.statistics.getTotalAmountLoss()} />
          <NetWonLost netWonLost={this.props.statistics.getNetWinLoss()} />
          <WinPercentage winPercentage={this.props.statistics.getPercentageOfWins()} />
          <LossPercentage lossPercentage={this.props.statistics.getPercentageOfLosses()} />
          <BlackJackPercentage blackJackPercentage={this.props.statistics.getPercentageOfBlackJacks()} />
        </div>
      </div>
    );
  }
}