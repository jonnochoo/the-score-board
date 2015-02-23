angular
  .module("scoreboardApp")
  .factory("gameService", gameService);

gameService.$inject = [];

function gameService() {
  var service = {
    createGame: createGame,
    players: []
  };

  function createGame(numberOfPlayers) {
    for(var i=0; i < numberOfPlayers; i++) {
      var player = new Player();
      service.players.push(player);
    }
  }

  return service;
}