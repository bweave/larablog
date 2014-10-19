'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('LoginCtrl', function ($scope, $sanitize, $state, Authenticate, Flash) {
    $scope.creds = {};
    $scope.flash = undefined;

    $scope.login = function() {
      Authenticate.save({
          'email': $sanitize($scope.creds.email),
          'password': $sanitize($scope.creds.password)
        }, function() {
            sessionStorage.authenticated = true;
            $state.go('blog.posts');
        }, function(resp){
            Flash.show(resp.data.flash);
        });
    };

  });
