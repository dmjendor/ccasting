'use strict';
window.angular.module('castingApp.components.birth.events', [])
        .directive('birthEvents', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/birth-info/birth-events/events.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', 'FunctionGroup', function ($scope, Master) {

						$scope.getBirthEvent = function(index){
							Master.Sub1.Table12.roll(index);
						}

                     }]
                };
            }
        ]);



