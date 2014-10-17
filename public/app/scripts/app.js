'use strict';

/**
 * @ngdoc overview
 * @name jsApp
 * @description
 * # jsApp
 *
 * Main module of the application.
 */
angular
  .module('jsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .state('blog', {
        abstract: true,
        url: '/blog',
        controller: 'BlogCtrl',
        templateUrl: 'app/views/blog.html'
      })
      .state('blog.posts', {
        url: '/posts',
        templateUrl: 'app/views/posts.html',
        controller: 'PostsCtrl'
      })
      .state('blog.single', {
        url: '/:id',
        templateUrl: 'app/views/single.html',
        controller: 'SingleCtrl'
      })
      .state('blog.new', {
        url: '/posts/new',
        templateUrl: 'app/views/new.html',
        controller: 'NewCtrl'
      })
      .state('blog.single.edit', {
        url: '/edit',
        templateUrl: 'app/views/edit.html',
        controller: 'EditCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });
