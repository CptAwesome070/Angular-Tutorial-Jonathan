'use strict';

angular.module('tutorialApp')
  .controller('HeadCtrl', function ($scope, $http, $cookies, tokenFetch, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.logout = function(){
      $cookies.remove('token');
      $location.url('/login');
    }

  });
