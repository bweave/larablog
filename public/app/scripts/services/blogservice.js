'use strict';

/**
 * @ngdoc service
 * @name jsApp.blogService
 * @description
 * # blogService
 * Service in the jsApp.
 */
angular.module('jsApp')
  .factory('BlogPost', function blogPost($resource) {
    return $resource('/posts/:id', { id: '@id' }, {
      update: {
        method: 'PUT',
        params: {id: '@id'}
      },
      delete: {
        method: 'DELETE',
        params: {id: '@id'}
      }
    });
  });
