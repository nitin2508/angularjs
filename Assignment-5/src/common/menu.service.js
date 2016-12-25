(function(){
  'use strict';
  angular.module('common')
  .service('MenuService',MenuService);

  MenuService.$inject = ['$http','ApiPath'];

  function MenuService($http,ApiPath) {

    var service = this;
    var userData ='';
  service.setUserData=function(data){
    this.userData=data;
  };
  service.getUserData=function(){
    return this.userData;
  };

    service.getCategories = function(){
      return $http.get(ApiPath+'/categories.json')
      .then(function(response){
        console.log(response);
        return response.data;
      });
    };

    service.getMenuItems = function(category){
            console.log("service");
            console.log(category);
      var config = {};
      if(category){
        config.params = {'category':category};
      }
      return $http.get(ApiPath+'/menu_items.json',config)
      .then(function(response){
        console.log(response.data);
        return response.data;
      });
    };

    service.getSignInData = function(){
      return $http.get(ApiPath+'/menu_items.json')
      .then(function(response){
        console.log(response.data);
        return response.data;
      });
    };
  }
}());
