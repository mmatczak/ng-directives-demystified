describe('\'panel\' directive', function () {
    'use strict';
    var $compile, $scope;

    beforeEach(function () {
        module('app.templates');
        module('panel');
    });

    beforeEach(inject(function (_$compile_, $rootScope) {
        $compile = _$compile_;
        $scope = $rootScope;
    }));

    it('adds a title to the panel\'s heading', function () {
        // given
        var title = 'My title',
            html = '<panel title=\'' + title + '\'></panel>',
            element;
        // when
        element = $compile(html)($scope);
        $scope.$apply();
        // then
        expect(element.find('div.panel-heading').text()).toEqual(title);
    });

    it('adds a paragraph to the panel\'s body', function () {
        // given
        var body = 'My body',
            html = '<panel><p>' + body + '</p></panel>',
            element;
        // when
        element = $compile(html)($scope);
        $scope.$apply();
        // then
        expect(element.find('div.panel-body p').text()).toEqual(body);
    });
});
