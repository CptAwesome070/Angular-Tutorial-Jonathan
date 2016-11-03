'use strict';

angular
    .module('tutorialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .constant('AUTH_SERVICE_BASE_URI', 'http://userservice.staging.tangentmicroservices.com/')
    .constant('PROJECT_SERVICE_BASE_URI', 'http://projectservice.staging.tangentmicroservices.com/api/v1/')


    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'projects'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

