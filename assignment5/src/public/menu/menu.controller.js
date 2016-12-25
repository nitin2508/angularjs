(function(){
  'use strict';
  angular.module('public')
  .controller('MenuController',MenuController);

  MenuController.$inject = ['menuCategories'];

  function MenuController(menuCategories){
    var vm = this;
    console.log("sdsd");
    vm.menuCategories = menuCategories;

  }

}());
