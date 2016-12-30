(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.dishCheck = function() {
    var dishes_count = dishesNum($scope.dishes);

    if (dishes_count > 3) {
      $scope.message == "Too much!";
    }
    else if (dishes_count <= 3) {
      $scope.message == "Enjoy!";
    }
    else if (dishes_count == 0 ) {
      $scope.message == "Please enter data first";
    }

  }

  function dishesNum(str) {
    var dishes = str.split(',');
    var dishes_num = dishes.length;

    return dishes_num;
  }

}

})();

