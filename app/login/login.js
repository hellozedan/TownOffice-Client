'use strict';

angular.module('login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])
    .controller('LoginCtrl',LoginCtrl );

    function LoginCtrl($scope){

      $scope.form1={};


    }
