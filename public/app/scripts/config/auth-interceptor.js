'use strict';

/**
 * @ngdoc function
 * @name jsApp.config
 * @description
 * # $httpProvider Interceptor
 * Intercepts $http calls to verify authentication
 */
angular
  .module('jsApp')
  .config(function($httpProvider){
    var interceptor = function($rootScope, $location, $q, Flash){
      var success = function(resp){
        return resp;
      };
      var error = function(resp){
        if (resp.status === 401){
          delete sessionStorage.authenticated;
          $location.path('/login');
          Flash.show(resp.data.flash);
        }
        return $q.reject(resp);
      };
      return function(promise){
        return promise.then(success, error);
      };
    };
    $httpProvider.responseInterceptors.push(interceptor);
  });
