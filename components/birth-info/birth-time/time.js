'use strict';
window.angular.module('castingApp.components.birth.time', [])
        .directive('birthTime', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/birth-info/birth-time/time.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', 'FunctionGroup', function ($scope, Master) {

						$scope.getBirthTime = function(){
							Master.Sub1.Table109.roll();
						}

                     }]
                };
            }
        ]);



