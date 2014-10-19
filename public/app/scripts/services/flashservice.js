'use strict';

angular
  .module('jsApp')
  .factory('Flash', function($rootScope){
    return {
      show: function(message){
        $rootScope.flash = message;
      },
      clear: function(){
        $rootScope.flash = '';
      }
    };
  });
