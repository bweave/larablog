'use strict';

angular
  .module('jsApp')
  .factory('Flash', function($rootScope, $timeout){
    var show = function (flashMessage, flashClass) {
      $rootScope.flash = true;
      $rootScope.flashMessage = flashMessage;
      $rootScope.flashClass = flashClass;
      $timeout(function() {
        clear();
      }, 1500);
    };
    var clear = function () {
      $rootScope.flash = false;
      $rootScope.flashMessage = '';
      $rootScope.flashClass = '';
    };

    return {
      show: show,
      clear: clear
    };
  });
