'use strict';

angular.module('lunchApp')
    .controller('EmployeeDetailController', function ($scope, $rootScope, $stateParams, entity, Employee, Company, User) {
        $scope.employee = entity;
        $scope.load = function (id) {
            Employee.get({id: id}, function(result) {
                $scope.employee = result;
            });
        };
        var unsubscribe = $rootScope.$on('lunchApp:employeeUpdate', function(event, result) {
            $scope.employee = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
