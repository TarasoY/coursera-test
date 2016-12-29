(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
  $scope.name = "Tarasoy";
  $scope.message = " ";

  $scope.dishCheck = function () {
    var menu = document.getElementById('lunch-menu').value;
    var arr = menu.split(',');
    console.log(arr);
    console.log(arr.length);

    if (arr.length > 3) {
      $scope.message == "Too much!";
    }
    else if (arr.length <= 3) {
      $scope.message == "Enjoy!";
    }
    else if (arr.length == 0) {
      $scope.message == "Please enter data first";
    }

    return $scope.message;
  }
}

})();
