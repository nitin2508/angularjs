(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['items'];

    function categoriesController(items) {
        var ctrl = this;
        ctrl.items = items;

    }
})();