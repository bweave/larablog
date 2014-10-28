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
      Authenticate.attempt({
        'email': $sanitize($scope.creds.email),
        'password': $sanitize($scope.creds.password)
      }).success(function(resp) {
        console.log(resp);
        Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
        sessionStorage.authenticated = true;
        $state.go('blog.posts');
      }).error(function(resp) {
        console.log('ERR: ', resp);
        Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
      });
    };

  });
