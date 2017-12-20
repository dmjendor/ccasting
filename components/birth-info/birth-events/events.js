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
                    controller: ['$scope', 'FunctionGroup', 'CharData', 'SharedFunctions', 'SharedData', 
						function ($scope, Master, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];
						$scope.getBirthEvents = function(){
							$scope.charInfo.birth.events = CharData.initBirthEvents();
							Master.Sub1.Table112.roll();
						}

						$scope.getBirthEvent = function(index){
							Master.Sub1.Table112.roll(index);
						}

                     }]
                };
            }
        ]);



