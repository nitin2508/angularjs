(function() {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http', '$stateParams']

    function MenuDataService($http) {
        this.getAllCategories = function() {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function(response) {
                console.log(response);
                return response.data;
            });
        };

        this.getItemsForCategory = function(name) {
            return $http({
                method: "Get",
                url: " https://davids-restaurant.herokuapp.com/menu_items.json?category=" + name
            }).then(function(response) {
                console.log("service", response.data.menu_items);
                return response.data.menu_items;
            });
        };
    }
})();