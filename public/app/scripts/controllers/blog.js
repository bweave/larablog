'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('BlogCtrl', function ($scope, BlogPost) {
    var posts = BlogPost.query(function () {
      $scope.posts = posts;
    });
  });
