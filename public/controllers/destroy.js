angular.module('MyApp')
  .controller('DestroyCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
    $scope.destroyShow = function() {
      Show.destroy({ showName: $scope.showName },
        function() {
          $scope.showName = '';
          $scope.destroyForm.$setPristine();
          $alert({
            content: 'TV show has been destroyed.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $scope.showName = '';
          $scope.destroyForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);