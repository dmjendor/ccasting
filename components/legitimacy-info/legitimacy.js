'use strict';
window.angular.module('castingApp.components.legitimacy', [])
        .directive('legitimacyInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/legitimacy-info/legitimacy.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions','FunctionGroup', function ($scope, $q, CharData, ShdFnc,Master) {

						$scope.charInfo = CharData.Character;

						$scope.getLegitimacy = function(){
							var defObj = $q.defer();

							$scope.charInfo.legitimacy = CharData.initLegitimacy();
							
							Master.Sub1.Table104.roll().then(function(){
								
							});

							

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getLegitimacy();
						}

                     }]
                };
            }
        ]);



