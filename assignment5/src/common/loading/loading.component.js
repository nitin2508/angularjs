(function() {
    'use strict';
    angular.module('common')
        .component('loading', {
            template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
            controller: LoadingController
        });

    LoadingController.$inject = ['$rootScope'];

    function LoadingController($rootScope) {
        var vm = this;
        var listener;
        vm.$onInit = function() {
            vm.show = false;
            listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        vm.$onDestroy = function() {
            listener();
        };

        function onSpinnerActivate(event, data) {
            vm.show = data.on;
        }
    }
}());