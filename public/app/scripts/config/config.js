'use strict';

angular
  .module('jsApp')
  .run(function($http,CSRF_TOKEN){
      /* jshint sub: true */
      $http.defaults.headers.common['csrf_token'] = CSRF_TOKEN;
  });
