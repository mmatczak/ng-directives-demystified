angular.module('tabset').directive('tabset', function () {
    'use strict';

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'tabset/html/tabset.html',
        replace: true,
        transclude: true,
        controller: function ($scope) {
            $scope.tabs = [];

            $scope.selectTab = function (index) {
                var deactivateAllTabs = function (tabs) {
                    angular.forEach(tabs, function (tab) {
                        tab.active = false;
                    });
                };
                deactivateAllTabs($scope.tabs);
                $scope.tabs[index].active = true;
            };

            // Controller's API for the tab directive
            this.addTab = function (tabState) {
                $scope.tabs.push(tabState);
                if ($scope.tabs.length === 1) {
                    tabState.active = true;
                }
            };
        }
    };
});