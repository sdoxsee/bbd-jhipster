 'use strict';

angular.module('lunchApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-lunchApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-lunchApp-params')});
                }
                return response;
            }
        };
    });
