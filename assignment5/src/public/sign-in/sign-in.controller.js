(function() {
  'use strict';
  angular.module('public')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['signInData','MenuService'];

  function SignInController(signInData,MenuService) {
    var vm = this;
    vm.dishname = false;
    vm.user = {};
    vm.sucess = false;
    vm.dish = '';
    vm.signInData = signInData;
    vm.submit = function() {
      for (var i = 0; i < signInData.menu_items.length; i++) {
        if (vm.dish.toLowerCase() === signInData.menu_items[i].short_name.toLowerCase()) {
          vm.user.dishName=signInData.menu_items[i].short_name;
          MenuService.setUserData(vm.user)
          vm.dishname = false;
          vm.sucess = true;
        }
      }
      if (vm.sucess) {
        vm.dishname = false;
      } else {
        vm.dishname = true;
      }
    };
  }

}());
