'use strict';

/**
 * @ngdoc service
 * @name jsApp.blogService
 * @description
 * # blogService
 * Service in the jsApp.
 */
angular.module('jsApp')
  .factory('Authenticate', function blogPost($resource) {
    return $resource('/service/authenticate/');
  });
