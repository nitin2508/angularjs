(function(){
  'use strict';
  angular.module('public')
  .component('menuItem',{
    templateUrl:'src/public/single-menu-item/single-menu-item.template.html',
    bindings:{
      menuItem:'<'
    },
    controller:MenuItemController
  });
  MenuItemController.$inject = ['ApiPath'];
  function MenuItemController(ApiPath){
    var vm = this;
    vm.basePath = ApiPath;
  }
}());
