angular.module('tabset').directive('tabset', function () {
    return{
        restrict: 'AE',
        scope: true,
        templateUrl: 'tabset/tabset.html',
        replace:true
    }
});