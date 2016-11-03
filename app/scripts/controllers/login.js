'use strict';

angular.module('tutorialApp')
  .controller('LoginCtrl', function ($scope, $http, $cookies, tokenFetch, $location, apiService) {

    $scope.creds = {
      username: "",
      password: ""
    };

    $scope.token = "";
    $scope.errors = "";

    /* initial scope loading function */
    $scope.init = function(){
      $scope.token = tokenFetch.getToken();
      if($scope.token != undefined){
        $location.url('/projects');
      }
    }

    /* login function */
    $scope.authLogin = function(creds) {
        var promise = apiService.login(creds.username, creds.password);
        promise.then(function (data, status, headers, config) {
            $location.url('/projects');
        })
    }
    /* call to init function */
    $scope.init();
  });
