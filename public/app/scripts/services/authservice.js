'use strict';

/**
 * @ngdoc service
 * @name jsApp.blogService
 * @description
 * # blogService
 * Service in the jsApp.
 */
angular.module('jsApp')
  .factory('Authenticate', function blogPost($http, $rootScope) {
    return {
      attempt: function(creds) {
        return $http.post('/service/authenticate/login', {
          email: creds.email,
          password: creds.password
        }).success(function (data) {
          $rootScope.$broadcast('UserLoggedIn', { user: data.user });
          return data;
        }).error(function (data) {
          console.log(data);
          return data;
        });
      },
      logout: function() {
        return $http.get('/service/authenticate/logout')
        .success(function (data) {
          console.log(data);
          $rootScope.$broadcast('UserLoggedOut');
          delete sessionStorage.authenticated;
          return data;
        }).error(function (data) {
          console.log(data);
          return data;
        });
      }
    };
  });
