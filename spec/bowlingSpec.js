'use strict';

describe("Bowling Game", function() {
  
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("should be able to return 0 if gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it("should return 20 if all ones", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });
});
