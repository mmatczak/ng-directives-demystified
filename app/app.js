angular.module('dd', ['simple-directive'])
    .controller('MainCntl', function ($scope) {
        $scope.message = "Hello World";
    });