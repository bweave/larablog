'use strict';

angular
  .module('jsApp')
  .factory('Flash', function($rootScope){
    return {
      show: function(flashMessage, flashClass){
        $rootScope.flash = true;
        $rootScope.flashMessage = flashMessage;
        $rootScope.flashClass = flashClass;
      },
      clear: function(){
        $rootScope.flash = false;
        $rootScope.flashMessage = '';
        $rootScope.flashClass = '';
      }
    };
  });
