angular.module('panel').directive('panel', function () {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            title: '@'
        },
        templateUrl: 'panel/html/panel.html',
        transclude: true,
        replace: true
    };
});