"use strict";angular.module("jsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]),angular.module("jsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("jsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("jsApp").factory("BlogPost",["$resource",function(a){return a("/posts/:id",{id:"@id"},{update:{method:"PUT",params:{id:"@id"}},"delete":{method:"DELETE",params:{id:"@id"}}})}]),angular.module("jsApp").controller("PostsCtrl",["$scope",function(a){a.awesomeThings=["awesome","things","here"]}]),angular.module("jsApp").controller("SingleCtrl",["$scope","$state","$stateParams","BlogPost",function(a,b,c,d){a.blogPost=d.get({id:c.id}),a.update=function(){a.blogPost.$update(function(a){console.log(a),b.go("blog.posts",{},{reload:!0})})},a.delete=function(a){a.$delete(function(a){console.log(a),b.go("blog.posts",{},{reload:!0})})}}]),angular.module("jsApp").controller("BlogCtrl",["$scope","$state","BlogPost","Authenticate",function(a,b,c,d){var e;sessionStorage.authenticated||b.go("home"),e=c.query(function(){a.posts=e}),a.logout=function(){d.get({},function(){b.go("home")})}}]);