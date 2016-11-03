/**
 * Created by jonathangreve on 2016/11/03.
 */

var module  = angular.module('tutorialApp');

module.service('apiService', function($q, AUTH_SERVICE_BASE_URI, $http, $cookies, loginService){
    this.login = function (username, password) {
        var deferred = $q.defer();
        var url = AUTH_SERVICE_BASE_URI + 'api-token-auth/';
        $http.post(url, {
            username: username, password: password
        }).success(function (response, status, headers, config) {

            if (response.token) {
                $cookies.put('token', response.token);
                loginService.loggedIn = true;
            }
            deferred.resolve(response, status, headers, config);
        }).error(function (response, status, headers, config) {
            deferred.reject(response, status, headers, config);
        });

        return deferred.promise;
    }
})
module.service('projectAPI', function($q, PROJECT_SERVICE_BASE_URI, $http, $cookies, loginService){
    this.getProjects = function () {

        var deferred = $q.defer(),
            url = PROJECT_SERVICE_BASE_URI + 'projects/';

        $http.get(url, loginService.getAuthHeaders())
            .success(function (response, status, headers, config) {
                if (response) {
                    deferred.resolve(response);
                }
                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {
            deferred.reject(response, status, headers, config);
        });

        return deferred.promise;
    }

    this.add= function(data){
        var deferred = $q.defer();
        url = PROJECT_SERVICE_BASE_URI + 'projects/';
        $http.post(url, loginService.getAuthHeaders())
            .success(function (response, status, headers, config) {
                if (response) {
                    deferred.resolve(response);
                }
                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {
            deferred.reject(response, status, headers, config);
        });
    },

        this.delete = function(pk){
            var deferred = $q.defer();
            url = PROJECT_SERVICE_BASE_URI + 'projects/'+pk+'/';
            $http.post(url, loginService.getAuthHeaders())
                .success(function (response, status, headers, config) {
                    if (response) {
                        deferred.resolve(response);
                    }
                    deferred.resolve(response, status, headers, config);
                }).error(function (response, status, headers, config) {
                    deferred.reject(response, status, headers, config);
                })
        },
        this.edit= function(data, pk){
            var deferred = $q.defer();
            url = PROJECT_SERVICE_BASE_URI + 'projects/'+pk+'/';
            $http.put(url,data, loginService.getAuthHeaders())
                .success(function (response, status, headers, config) {
                    if (response) {
                        deferred.resolve(response);
                    }
                    deferred.resolve(response, status, headers, config);
                }).error(function (response, status, headers, config) {
                deferred.reject(response, status, headers, config);
            })
        }
})

module.service('loginService', function( $cookies) {
    this.loggedIn = function(status){

    }
    this.getToken = function(){
        return $cookies.get('token');
    }
    this.getAuthHeaders = function(){
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.getToken()
            }}
    }
})

