angular.module('tabset').directive('tab', function () {
    return{
        restrict: 'AE',
        scope: {
            title: '@'
        },
        templateUrl: 'tabset/tab.html',
        transclude: true,
        replace:true
    }
});