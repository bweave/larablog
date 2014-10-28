'use strict';

/**
 * @ngdoc service
 * @name jsApp.blogService
 * @description
 * # blogService
 * Service in the jsApp.
 */
angular.module('jsApp')
  .factory('Authenticate', function blogPost($http) {
    return {
      attempt: function(creds) {
        return $http.post('/service/authenticate/login', {
          email: creds.email,
          password: creds.password
        }).success(function (data) {
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
        }).error(function (data) {
          console.log(data);
          return data;
        });
      }
    };
  });
