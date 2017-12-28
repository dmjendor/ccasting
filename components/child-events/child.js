'use strict';
window.angular.module('castingApp.components.childEvents', [])
        .directive('childEvents', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/child-events/child.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope','$q','FunctionGroup', 'CharData', 'SharedFunctions', 'SharedData', 
						function ($scope, $q, Master, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];

						$scope.getChildEvents = function(){
							
							$scope.charInfo.childhood.events = CharData.initItemsList();
							//for(var i=0;i<count;i++){
								Master.Sub2.Table216a.roll();
							//}
						}


						if($scope.charInfo.generateFull){
							$scope.getChildEvents();
						}


                     }]
                };
            }
        ]);



