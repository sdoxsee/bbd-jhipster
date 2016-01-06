'use strict';

angular.module('lunchApp').controller('EmployeeDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Employee', 'Company', 'User',
        function($scope, $stateParams, $uibModalInstance, entity, Employee, Company, User) {

        $scope.employee = entity;
        $scope.companys = Company.query();
        $scope.users = User.query();
        $scope.load = function(id) {
            Employee.get({id : id}, function(result) {
                $scope.employee = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('lunchApp:employeeUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.employee.id != null) {
                Employee.update($scope.employee, onSaveSuccess, onSaveError);
            } else {
                Employee.save($scope.employee, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
