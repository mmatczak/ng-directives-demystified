angular.module('tabset').directive('tab', function () {
    return{
        restrict: 'AE',
        require: '^tabset',
        scope: {
            title: '@'
        },
        templateUrl: 'tabset/html/tab.html',
        transclude: true,
        replace: true,
        link: function (scope, element, attrs, tabsetCntl) {
            scope.tabState = {
                title: scope.title
            };
            tabsetCntl.addTab(scope.tabState);
        }
    }
});