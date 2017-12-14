'use strict';
window.angular.module('castingApp.components.birth.place', [])
        .directive('birthPlace', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/birth-info/birth-place/place.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', 'FunctionGroup', function ($scope, Master) {

						$scope.getBirthPlace = function(){
							Master.Sub1.Table110.roll();
						}

                     }]
                };
            }
        ]);



