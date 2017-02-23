'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


    .controller('View1Ctrl',View1Ctrl );


function View1Ctrl($scope,FormDetailsService){


      $scope.forms_list=[
      ];


    $scope.query={};
    $scope.query.name="";
    $scope.query.gosh="";
    $scope.query.helka="";
    $scope.query.megrash="";


    FormDetailsService.getAllForms().then(function (result) {
            if (result != null) {
                $scope.forms_list = result;
            }
        }, function (err) {
        }
    );

    $scope.goSearchBy=function () {



        console.log($scope.query);
        if(  $scope.query.type=="" && $scope.query.name=="" &&  $scope.query.gosh=="" &&  $scope.query.helka==""&& $scope.query.megrash==""){
            //notification to choose one
            alert('write something to search')
        }else{

             FormDetailsService.getFormByQuery($scope.query).then(function (result) {
                 $scope.forms_list=result;
             }, function (err) {
             }
             );
        }
    }

    $scope.clearSearch=function () {

        $scope.query={};
    }


    $scope.OpenForm=function(_id){
        var url="#!/view_form?";
        window.open(url+"id="+_id);
    }
};