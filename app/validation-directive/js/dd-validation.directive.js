angular.module('simple-directive', [])
    .directive('ngddGrid', function () {
        'use strict';

        return {
            replace: true,
            template: '<span>Hello</span>'
        };
    });
