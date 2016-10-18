(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('MenuApp')
        .component('itemComponent', {
            templateUrl: 'src/item.component.html',
            //templateUrl: 'templateUrl',
            bindings: {
                item: '<',
            },
        });

})();