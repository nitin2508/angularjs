(function() {
    'use strict';

    angular.module('CheckOffList', [])
        .service('ShoppingListService', ShoppingListService)
        .controller('MenuController', MenuController)
        .controller('CheckOffController', CheckOffController);

    MenuController.$inject = ['$scope', 'ShoppingListService'];

    function MenuController($scope, ShoppingListService) {
        $scope.items = ShoppingListService.getShoppingList();
        $scope.checkItemList = function() {
            if (ShoppingListService.getShoppingList().length < 1) {
                return true;

            } else {
                return false;
            }
        };
        $scope.toBought = function(index) {
            ShoppingListService.toBought(index);
        };
    }
    CheckOffController.$inject = ['$scope', 'ShoppingListService'];

    function CheckOffController($scope, ShoppingListService) {
        // $scope.checkcheckOffList = true;
        $scope.checkOffList = ShoppingListService.getCheckOffList();
        $scope.checkcheckOffList = function() {
            if (ShoppingListService.getCheckOffList().length < 1) {
                console.log("sdssf");
                return true;

            } else {
                return false;
            }
        };


    }


    function ShoppingListService() {
        var checkOffList = [];
        var toBuyList = [{
            item: "Cookies",
            quantity: 10
        }, {
            item: "Sugar",
            quantity: 5
        }, {
            item: "Juice",
            quantity: 3
        }, {
            item: "Bread",
            quantity: 3
        }, {
            item: "Milk",
            quantity: 8
        }];

        this.getShoppingList = function() {
            console.log(toBuyList);
            return toBuyList;

        };
        this.getCheckOffList = function() {
            return checkOffList;
        };
        this.toBought = function(index) {
            checkOffList.push(toBuyList[index]);
            toBuyList.splice(index, 1);
        };


    }



})();