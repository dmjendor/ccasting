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
                    controller: ['$scope', 'FunctionGroup','CharData', function ($scope, Master,CharData) {
						

						$scope.getBirthPlace = function(){
							CharData.Character.birth.place = CharData.initItemsList();
							Master.Sub1.Table110.roll();
						}

                     }]
                };
            }
        ]);



