'use strict';
window.angular.module('castingApp.components.birth.order', [])
        .directive('birthOrder', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/birth-info/birth-order/order.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedData', 'SharedFunctions', 'FunctionGroup', function ($scope, $q, CharData, SharedData, ShdFnc, Master) {

						$scope.charInfo = CharData.Character;
						
						var daTa = SharedData.tables[0];

						$scope.getRace = function(){
							Master.Sub1.Table101.roll();
						}

						if($scope.charInfo.generateFull){
							$scope.getRace();
						}

                     }]
                };
            }
        ]);



