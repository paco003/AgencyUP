angular.module('ngShapeImageView', [])

.directive('shapeImageView', [function() {
    return {
        restrict: 'E',
        scope: {
            data   : '=data'
        },
        template: '<img class="{{data.shape}}" ng-src="{{data.image}}"/>'
    };
}]);
