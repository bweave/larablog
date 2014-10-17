'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('NewCtrl', function ($scope, $state, BlogPost) {

    $scope.blogPost = new BlogPost();

    $scope.createPost = function() {
      $scope.blogPost.$save(function(resp) {
        console.log(resp);
        $state.go('blog.posts', {}, { reload: true });
      });
    };

  });
