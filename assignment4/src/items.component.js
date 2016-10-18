(function() {
    'use strict';


    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'items.html',
            controller: ControllerController,
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['MenuDataService'];

    function ControllerController(MenuDataService) {
        var $ctrl = this;
        $ctrl.items = MenuDataService.getItemsForCategory(shortName);

        ////////////////

        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();