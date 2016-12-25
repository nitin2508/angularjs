(function() {
    'use strict';
    angular.module('common', [])
    .constant('ApiPath','https://dry-peak-26128.herokuapp.com')
    .config(config);
    config.$inject = ['$httpProvider'];
    function config($httpProvider){
      $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
}());
