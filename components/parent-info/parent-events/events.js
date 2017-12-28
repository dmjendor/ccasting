'use strict';
window.angular.module('castingApp.components.parent.events', [])
        .directive('parentEvents', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-events/events.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope','$q','FunctionGroup', 'CharData', 'SharedFunctions', 'SharedData', 
						function ($scope, $q, Master, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];

						$scope.getEvents = function(){
							
							$scope.charInfo.parent.events = CharData.initItemsList();
							//for(var i=0;i<count;i++){
								Master.Sub1.Table5.roll();
							//}
						}


						if($scope.charInfo.generateFull){
							$scope.getEvents();
						}

                     }]
                };
            }
        ]);



