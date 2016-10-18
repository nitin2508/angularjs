(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('itemController', itemController);

    itemController.$inject = ['data'];

    function itemController(data) {
        var ctrl = this;
        console.log(data);
        ctrl.name = data;

    }
})();