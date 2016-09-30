(function() {
    'use strict';

    angular.module('FilterMenu', [])
        .service('MenuService', MenuService)
        .controller('CheckOffController', CheckOffController)
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: "menu.html",
            scope: {
                items: '<',
                onRemove: '&'
            }
            // controller: MenuDirectiveController,
            // controllerAs: 'menu',
            // bindToController: true,
        };
        return ddo;
    }

    // function MenuDirectiveController() {

    // }
    // CheckOffController.$inject = ['$scope', 'ShoppingListService'];

    function CheckOffController($scope, MenuService) {
        var menu = this;
        console.log("parent Controller");
        menu.filterMenu = "";
        menu.menuItems = MenuService.getFilteredItems();
        menu.narrowDown = function() {
            MenuService.filteredMenu(menu.filterMenu);
        };
        menu.removeItem = function(index) {
            MenuService.removeItem(index);
        }
    }


    function MenuService($http) {
        var menu = [];
        var filterMenu = [];

        $http({
            method: 'GET',
            url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
        }).then(function(response) {
            console.log(response);
            menu.length = 0;
            for (var i = 0; i < response.data.menu_items.length; i++) {
                menu.push(response.data.menu_items[i]);
                filterMenu.push(response.data.menu_items[i]);
                var j = 100;
                while (j != 0) {
                    console.log(j);
                    j--;
                }
            }
            console.log(menu);
        });

        this.getFilteredItems = function() {
            return filterMenu;
        }

        this.filteredMenu = function(value) {
            filterMenu.length = 0;
            console.log(value);
            console.log(menu);
            for (var i = 0; i < menu.length; i++) {
                if (menu[i].description.indexOf(value) !== -1) {
                    filterMenu.push(menu[i]);
                }
            }
            console.log("filter", filterMenu.length)
        };

        this.removeItem = function(index) {
            console.log(index);
            filterMenu.splice(index, 1);
        };


    }



})();