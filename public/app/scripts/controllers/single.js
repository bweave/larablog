'use strict';

/**
 * @ngdoc function
 * @name jsApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the jsApp
 */
angular.module('jsApp')
  .controller('SingleCtrl', function ($scope, $state, $stateParams, BlogPost, Flash) {

    $scope.blogPost = BlogPost.get({ id: $stateParams.id });

    $scope.update = function() {
      $scope.blogPost.$update(function(resp) {
        console.log(resp);
        Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
        $state.go('blog.posts', {}, { reload: true });
      });
    };

    $scope.delete = function(post) {
      post.$delete(function(resp) {
        console.log(resp);
        Flash.show(resp.flash.flashMessage, resp.flash.flashClass);
        $state.go('blog.posts', {}, { reload: true });
      });
    };

  });
