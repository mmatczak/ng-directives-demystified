angular.module('dd', ['tabset', 'directives-demystified'])
    .controller('MainCntl', function ($scope) {
        $scope.message = "Hello World";
    });