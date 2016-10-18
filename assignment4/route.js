(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home.html',
            })
            .state('home.categories', {
                url: '/categories',
                templateUrl: 'src/categories.html',
                controller: 'categoriesController as ctrl',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('home.categories.item', {
                url: '/item/{shortName}',
                templateUrl: 'src/item.html',
                controller: 'itemController as itemController',
                resolve: {
                    data: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });

    }
})();