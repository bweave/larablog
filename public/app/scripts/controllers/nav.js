'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('NavCtrl', function ($rootScope, $scope, $state, $sanitize, Authenticate, Flash) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.creds = {};
    $scope.loggedIn = (sessionStorage.authenticated) ? true : false;

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

    $scope.logout = function (e){
        e.preventDefault();
        Authenticate.logout()
        .success(function(resp) {
          console.log(resp);
          Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
          $state.go('home');
        })
        .error(function(resp) {
          console.log(resp);
        });
    };

    $scope.$on('UserLoggedIn', function() {
      $scope.loggedIn = true;
      $scope.creds = {};
    });

    $scope.$on('UserLoggedOut', function() {
      $scope.loggedIn = false;
      $scope.creds = {};
    });
  });
