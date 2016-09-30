'use strict';

angular.module("checkFood", [])
    .controller('CheckFoodController', ['$scope', function($scope) {
        $scope.food = "";
        $scope.message="";

    function foodCalculate(food) {
            var a = 0;
            for (var i = 0; i < food.length; i++) {
                if (food.charAt(i) === ",") {
                    a++;
                }
            }
            return a;
        }

       $scope.messageDisplay = function() {
            var params = foodCalculate($scope.food);
            if (params < 4 && params>0) {
                $scope.message = "Enjoy";
            } else if (params > 3) {
                $scope.message = "Too much!!";
            } else {
                $scope.message = "Enter valid food";
            }
        };
    }]);
