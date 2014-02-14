'use strict';

var portfolio = angular.module('portfolio', [])
    .controller('portfolioCtrl', function($scope) {
        $scope.circle = 'images/portfolio/menu_circle.png';
        $scope.menuHeight = 300;
        $scope.overlayColor = '#4EC9DD';
        $scope.border = {
            thickness: '3px',
            type: 'dotted',
            color: $scope.overlayColor
        };
        $scope.menuItems = [
            {
                src: 'images/ShiseidoAd.JPG',
                title: 'Graphic Design'
            },
            {
                src: 'images/BvlgariOmniaBottle.JPG',
                title: 'Photography'
            },
            {
                src: 'images/PISTON_ad.jpg',
                title: 'Another'
            }
        ];
    })
    .directive('portfolio', function() {
        return {
            controller: 'portfolioCtrl',
            restrict: 'E',
            templateUrl: 'scripts/directives/tpls/portfolio.html',
            link: function(scope, element) {
                scope.menu = angular.element(element.find('menu'));
                
                scope.$watch(element.children(), function() {
                    var numOfChildren = scope.menu.children().length;
                    angular.forEach(scope.menu.children(), function(item, key) {
                        var images = angular.element(item).find('img');
                        var image = angular.element(images[0]);
                        var circle = angular.element(images[1]);
                        
                        image.bind('load', function(event) {
                            var target = angular.element(event.target);
                            var $target = $(target),
                                height = $(target).height(),
                                width = $(target).width();
                                
                            if(Math.max(height, width) === width) {
                                $target.css('height', scope.menuHeight + 'px');
                            } else {
                                $target.css('width', scope.menuHeight + 'px');
                            }
                            scope.centerElement(target);
                        });
                        angular.element(item).bind('mouseover', function(event) {
                           var overlay = $(item).find('.overlay');
                           if(!overlay.hasClass('centered')) {
                                var text = $(overlay).find('.text');
                                scope.centerElement(text);
                                overlay.addClass('centered');
                            }
                        });
                        circle.bind('load', function(event) {
                            if(key+1 < numOfChildren) {
                                angular.element(event.target).parent()
                                        .css('border-right', scope.border.thickness + " " + scope.border.type + " " + scope.border.color);
                            }
                        });
                    });
                });
                
                scope.centerElement = function(element) {
                    var parent = $(element.parent());
                    var left = parent.width()/2 - $(element).width()/2;
                    var top = parent.height()/2 - $(element).height()/2;
                    
                    element.css('position', 'absolute');
                    element.css('left', left + 'px');
                    element.css('top', top + 'px');
                };
                scope.setHoverIndex = function(index) {
                    scope.hoverIndex = index;
                };
                scope.clearHoverIndex = function() {
                    scope.hoverIndex = -1;
                };
            }
        };
    });