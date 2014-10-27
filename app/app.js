angular.module('dd', ['panel', 'tabset', 'directives-demystified'])
    .controller('MainCntl', function ($scope) {
        'use strict';

        $scope.message = "Hello World";
    });