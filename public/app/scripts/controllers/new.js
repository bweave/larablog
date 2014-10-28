'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('NewCtrl', function ($scope, $state, BlogPost, Flash) {

    $scope.blogPost = new BlogPost();

    $scope.createPost = function() {
      $scope.blogPost.$save(function(resp) {
        console.log(resp);
        Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
        $state.go('blog.posts', {}, { reload: true });
      });
    };

  });
