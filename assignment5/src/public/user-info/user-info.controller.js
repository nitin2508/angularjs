(function() {
  'use strict';
  angular.module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService'];

  function UserInfoController(MenuService) {
    var vm = this;
    vm.link=true;
    vm.data=false;
    if(MenuService.getUserData()){
      vm.link=false;
      vm.data=true
      vm.userdata = MenuService.getUserData();
    }
  }

}());
