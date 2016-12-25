(function(){
  'use strict';
  angular.module('common')
  .factory('loadingHttpInterceptor',LoadingHttpInterceptor);

  LoadingHttpInterceptor.$inject = ['$q','$rootScope'];
  function LoadingHttpInterceptor($q,$rootScope){
    var loadingCount = 0;
    var loadingEventName='spinner:activate';
    return{
      request:function(config){
    //    console.log("interceptor",config);
        if(++loadingCount ===1){
          $rootScope.$broadcast(loadingEventName,{on:true});
        }
        return config;
      },

      response:function(response){
        if(--loadingCount === 0){
          $rootScope.$broadcast(loadingEventName,{on:false});
        }
        return response;
      },
      responseError:function(response){
        if(--loadingCount === 0){
          $rootScope.$broadcast(loadingEventName,{on:false});
        }
        return $q.reject(response);
      }
    };

  }
}());
