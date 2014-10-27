var scopeToString = function ($scope) {
    return '\tscope=' + $scope.$id + ', parentScope=' + $scope.$parent.$id;
};
angular.module('directives-demystified', []).directive('dirA', function ($log) {
    return {
        restrict: 'A',
        controller: function ($scope) {
            $log.debug('Controller \tdir-a' + scopeToString($scope))
        },
        compile: function () {
            $log.debug('Compile \tdir-a');
            return {
                pre: function ($scope) {
                    $log.debug('Prelink \tdir-a');
                },
                post: function ($scope) {
                    $log.debug('Postlink \tdir-a');
                }
            }
        }
    }
});