'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('BlogCtrl', function ($scope, $state, BlogPost, Authenticate, Flash) {
    var posts;

    if (! sessionStorage.authenticated){
      $state.go('login');
    }

    posts = BlogPost.query(function () {
      $scope.posts = posts;
    });

    $scope.logout = function (){
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
  });
