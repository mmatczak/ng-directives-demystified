angular.module('dd', ['simple-directive', 'tabset'])
    .controller('MainCntl', function ($scope) {
        $scope.message = "Hello World";
    });