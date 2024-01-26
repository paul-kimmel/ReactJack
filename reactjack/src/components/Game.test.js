import React from 'react';
import { createRoot } from 'react-dom/client';

import Game from './Game'

describe("Game Test Suit", () => {

  it("Sanity Test", async () => {
    expect(true).toBe(true);
  });

  it("Game render test", async () => {
    const div = document.createElement('div');
    const root = createRoot(div);

    root.render(
      <Game />
    );

    await new Promise(resolve => setTimeout(resolve, 1000));

  });

  it("Game object test", async () => {
    const game = new Game();
    expect(game.decks.deckCount).toBe(6);
  });

  it("canPlayNewGame test", async () => {
    const game = new Game();
    console.log(`playerBalance = ${game.state.playerBalance}`);
    console.log(`playerBet = ${game.state.playerBet}`);

    expect(game.canPlayNewGame()).toBe(true);
  });

  it("Test componentDidMount with Mock", async () => {

    const mock = jest.fn(() => console.log("componentDidMount mock called"));

    Game.prototype.componentDidMount = mock;

    const div = document.createElement('div');
    const root = createRoot(div);

    root.render(
      <Game />
    );

    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(mock.mock.calls).toHaveLength(1);


  });

  it("Test Game after ctor", async () => {
    const game = new Game();
    expect(game.decks.deckCount).toBe(6);
    expect(game.playerRef).toBeDefined();
    expect(game.dealerRef).toBeDefined();
    expect(game.state.isGameOver).toBeFalsy();
    expect(game.state.isNewGame).toBeTruthy();
    expect(game.state.playerBalance).toBe(500);


  });

});


