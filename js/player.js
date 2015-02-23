function Player() {

  var score = 0;
  var name = '';
  
  this.name = name;
  this.score = score;
  this.incrementScore = incrementScore;
  this.decrementScore = decrementScore;
  
  return this;

  function incrementScore() {
    this.score++;
  }

  function decrementScore() {
    this.score = this.score - 1;
  }
}