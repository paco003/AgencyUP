angular.module('ngSearch', [])

.constant('ngSearchPath','module/searchBar/themes')

.directive('search', ['ngSearchPath', function(path) {
    return {
        restrict: 'E',
        scope: {
            theme : '=theme',
            data : '=data',
            events : '=events'
        },
        bindToController : true,
        controllerAs: "searchController",
        controller: ['$scope', '$timeout', function($scope, $timeout) {
            var _this = this;

            _this.isHideFilter = false;

            $scope.$on('$includeContentLoaded', function(){
                _this.searchData = _this.data.items;
                _this.addImageOnComponent(_this.data);
            });

            $scope.$watch('searchController.searchValue', function(newValue, oldValue) {
              if (_this.events && _this.events['onSearch']) {
                _this.searchData = _this.events['onSearch'](newValue, oldValue, _this.data.items);
              }
            });

            _this.addImageOnComponent = function(data) {
                $timeout(function() {
                    if (data) {
                        if (data.headerImage) {
                            angular.element('.container-hearder-image')
                             .css({'background-image': 'url("'+ data.headerImage + '")'});
                        }
                        if (data.backgroundImage) {
                            angular.element('.container-background')
                             .css({'background-image': 'url("'+ data.backgroundImage + '")'});
                        }
                        if (data.containerBodyImage) {
                            angular.element('.container-background-full')
                             .css({'background-image': 'url("'+ data.containerBodyImage + '")'});
                        }
                    }
                });
            };

           _this.clearText = function() {
              _this.searchValue = "";
            };

            _this.toggleFilter = function() {
              _this.isHideFilter = !_this.isHideFilter;
            };

          _this.onClick = function(event, item, e) {
            if (e) {
              e.stopPropagation();
            }

            if (_this.events && _this.events[event]) {
              _this.events[event](item);
            }
          };

          _this.contentUrl = function(type) {
              if (_this.theme) {
                  if (type === "html") {
                      return path + "/" + _this.theme + '/index.html';
                  } else if (type === "css") {
                      return path + "/" + _this.theme + "/style.css";
                  }
              }
          };
        }],
        template: '<link data-ng-href="{{searchController.contentUrl(\'css\')}}" rel="stylesheet"/><div ng-include="searchController.contentUrl(\'html\')"></div>'
    };
}]);
