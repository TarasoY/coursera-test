(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope) {
  $scope.dishes = "";


  $scope.dishCheck = function() {
    var dishes_arr = $scope.dishes.split(',');
    var dishes_count = checkForEmptyElements(dishes_arr);

    if (dishes_count == 0 ) {
      $scope.message = "Please enter data first";
    }
    else if (dishes_count > 3) {
      $scope.message = "Too much!";
    }
    else if (dishes_count <= 3) {
      $scope.message = "Enjoy!";
    }
  }

  function checkForEmptyElements(arr) {
    var n = arr.length;
    for (var i = 0; i < arr.length; i++) {
      if(!arr[i]) n--;
    }
    return n;
  }

}

})();
