'use strict'

function BowlingGame() {
  this.rolls = []
}
BowlingGame.prototype.roll = function(pinsNumber) {
  this.rolls.push(pinsNumber)
};

BowlingGame.prototype.score = function() {
  var result = 0;
  for (var i = 0; i < 20; i++) {
    result += this.rolls[i]
  }
  return result;
};

