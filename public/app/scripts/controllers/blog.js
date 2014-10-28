'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('BlogCtrl', function ($scope, $state, BlogPost) {
    var posts;

    if (! sessionStorage.authenticated){
      $state.go('login');
    }

    posts = BlogPost.query(function () {
      $scope.posts = posts;
    });
  });
