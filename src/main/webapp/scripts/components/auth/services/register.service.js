'use strict';

angular.module('lunchApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


