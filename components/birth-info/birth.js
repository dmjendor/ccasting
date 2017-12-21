'use strict';
window.angular.module('castingApp.components.birth', [])
        .directive('birthInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/birth-info/birth.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedData', 'SharedFunctions', 'FunctionGroup', function ($scope, $q, CharData, SharedData, ShdFnc, Master) {

						$scope.charInfo = CharData.Character;
						$scope.birthCollapsed = false;
						var daTa = SharedData.tables[0];

						$scope.getBirth = function(){
							CharData.initBirth();
							Master.Sub1.Table108.roll();
							Master.Sub1.Table109.roll();
							Master.Sub1.Table110.roll();
							Master.Sub1.Table112.roll();
						}

						if($scope.charInfo.generateFull){
							$scope.getBirth();
						}

                     }]
                };
            }
        ]);



