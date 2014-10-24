angular.module('panel').directive('panel', function () {
    'use strict';

    return {
        restrict: 'AE',
        scope: {
            title: '@'
        },
        templateUrl: 'panel/html/panel.html',
        transclude: true,
        replace: true
    };
});