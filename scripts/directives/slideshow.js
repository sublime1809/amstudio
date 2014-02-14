'use strict';

var slideshow = angular.module('slideshow', [])
    .controller('slideshowCtrl', function($scope) {
        $scope.images = [
            {src:"images/PISTON_ad.jpg"},
            {src:"images/slideshow/ShiseidoAdHeader.jpg"}
        ];
    }) 
    .directive('slideshow', function($interval, $window, $document) {
        return {
            controller: 'slideshowCtrl',
            restrict: 'E',
            templateUrl: 'scripts/directives/tpls/slideshow.html',
            link: function(scope, element, attrs) {
               
                scope.index = 0;
                
                scope.$watch(element.children(),function() {
                    var images = element.find('img'),
                    count = scope.images.length;
                    
                    angular.element(images[0]).css('display', 'block');
                    
                    var slidePic = $interval(function() {
                        transition();
                    }, 2000);

                    var transition = function() {
//                        console.log(element.find('img')[0]);
                        angular.element(images[scope.index]).css('display', 'none');
                        scope.index = (scope.index + 1) % count;
                        angular.element(images[scope.index]).css('display', 'block');
                    };
                    
                    scope.height = $window.innerHeight - $(element).offset().top;
                    console.log(scope.height);
                });
                
            }
        };
    });