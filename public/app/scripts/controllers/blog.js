'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('BlogCtrl', function ($scope, $state, BlogPost, Authenticate) {
    var posts;

    if (! sessionStorage.authenticated){
      $state.go('home');
    }

    posts = BlogPost.query(function () {
      $scope.posts = posts;
    });

    $scope.logout = function (){
        Authenticate.get({},function(){
            $state.go('home');
        });
    };
  });
