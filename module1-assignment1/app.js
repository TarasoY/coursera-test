(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
    $scope.dishes = "";

  $scope.dishCheck = function () {
    var menu = $scope.dishes.split(',');
    if (menu.length > 3) {
      $scope.message == "Too much!";
    }
    else if (menu.length <= 3) {
      $scope.message == "Enjoy!";
    }
    else if (menu.length == 1 && arr[0] =='') {
      $scope.message == "Please enter data first";
    }

  }
}

})();
