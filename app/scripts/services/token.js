'use strict';

angular.module('tutorialApp')
  .factory('tokenFetch',function($cookies) {
    return {
      getToken: function () {
        return $cookies.get('token');
      }
    }
  })
