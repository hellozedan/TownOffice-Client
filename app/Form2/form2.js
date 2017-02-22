'use strict';

angular.module('myApp.form1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/form1', {
            templateUrl: 'form1/form1.html',
            controller: 'Form1Ctrl'
        });
    }])
    .controller('Form1Ctrl', Form1Ctrl);

function Form1Ctrl($scope) {


    $scope.form1 = {};
    $scope.form1.date = new Date();
    $scope.form1.name="1";


    $scope.printPage = function () {
        window.print();
    }

    $scope.form1.table = [

        {
            col1: '  ',
            col2: '  ',
            col3: '',
            col4: '  ',
            col5: '',
            col6: '',
            col7: ''
        },
        {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: '',
            col6: '',
            col7: ''
        },
        {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: '',
            col6: '',
            col7: ''
        },
        {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: '',
            col6: '',
            col7: ''
        }
    ]


    $scope.addRowToTable = function () {
        $scope.form1.table.push({
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: '',
            col6: '',
            col7: ''
        })
    }

    $scope.removeRowFromTable = function (index) {
        $scope.form1.table.pop();
    }
}

