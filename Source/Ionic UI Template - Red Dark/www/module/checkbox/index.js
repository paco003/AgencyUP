angular.module('ngCheckBox', [])

.constant('ngCheckBoxPath', 'module/checkbox/themes/')

.directive('checkbox', ['ngCheckBoxPath', function(path) {
    return {
        restrict: 'E',
        scope: {
            theme  : '=theme',
            data   : '=data',
            events : '=events'
        },
        bindToController : true,
        controllerAs: 'checkboxController',
        controller: ['$scope', function($scope) {
            var _this = this;

            _this.onClick = function(event, item, e) {
                if (e) {
                    e.stopPropagation();
                }
                if ('onButton' == event && item.favorite != null) {
                    item.favorite = !item.favorite;
                }
                if (_this.events && _this.events[event]) {
                    _this.events[event](item);
                }
            };

            _this.contentUrl = function(type) {
                if (_this.theme) {
                    if (type === 'html') {
                        return path + _this.theme + '/index.html';
                    } else if (type === 'css') {
                        return path + _this.theme + '/style.css';
                    }
                }
            };
        }],
        template: '<link data-ng-href="{{checkboxController.contentUrl(\'css\')}}" rel="stylesheet"/><div ng-include="checkboxController.contentUrl(\'html\')"></div>'
    };
}]);
