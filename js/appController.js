angular
  .module("scoreboardApp")
  .controller("appController", appController);

appController.$inject= ['$scope', 'gameService'];

function appController($scope, gameService) {
  $scope.gameService = gameService;
  $scope.isCreated = false;
  $scope.isStarted = false;
  $scope.numberOfPlayers = 4;

  $scope.create = function() {
    $scope.isCreated = true;
    gameService.createGame($scope.numberOfPlayers);
  }

  $scope.start = function(player){
    $scope.isStarted = true;
  }
}