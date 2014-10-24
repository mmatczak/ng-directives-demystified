angular.module('tabset').directive('tabset', function () {
    return{
        restrict: 'AE',
        scope: true,
        templateUrl: 'tabset/html/tabset.html',
        replace: true,
        transclude: true,
        controller: function ($scope) {
            var ctrl = this,
                tabs = ctrl.tabs = $scope.tabs = [];
            ctrl.addTab = function (tab) {
                tabs.push(tab);
                if (tabs.length === 1) {
                    tab.active = 1;
                }
            };
            $scope.selectTab = function (index) {
                angular.forEach(tabs, function (tab) {
                    tab.active = false;
                });
                tabs[index].active = true;
            };
        }
    }
});