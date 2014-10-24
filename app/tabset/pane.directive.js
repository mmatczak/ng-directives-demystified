angular.module('tabset').directive('pane', function () {
    return{
        restrict: 'AE',
        scope: {
            title: '@'
        },
        templateUrl: 'tabset/pane.html',
        transclude: true,
        replace:true
    }
});