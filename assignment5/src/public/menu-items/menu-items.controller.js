(function(){
  'use strict';
  angular.module('public')
  .controller('MenuItemsController',MenuItemsController);

  MenuItemsController.$inject = ['menuItems'];

  function MenuItemsController(menuItems){
    var vm = this;
    console.log("dsdfds",menuItems);
    vm.menuItems = menuItems;
  }

}());
