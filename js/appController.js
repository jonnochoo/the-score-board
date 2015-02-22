angular
  .module("scoreboardApp")
  .controller("appController", AppController);

AppController.$inject= ['$scope'];

function AppController($scope) {
  $scope.numberOfPlayers = 4;
  $scope.players = [];
  $scope.isCreated = false;
  $scope.isStarted = false;

  $scope.create = function() {
    $scope.isCreated = true;
    for(var i=0; i < $scope.numberOfPlayers; i++) {
      $scope.players.push(new Player());
    }
  }

  $scope.down = function(player){
    player.score = player.score - 1;
  }

  $scope.start = function(player){
    $scope.isStarted = true;
  }

  $scope.up = function(player){
    player.score++;
  }
}