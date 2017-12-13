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

							// if there was a legit mod before, remove it.
							$scope.charInfo.solMod -= $scope.legitMod;
							$scope.charInfo.legitimacy = CharData.initLegitimacy();
							
							Master.Sub1.Table104.roll().then(function(){
								if($scope.charInfo.legitMod){
									//if you are illegitimate and have a positive solMod, reduce your solMod by the legitMod
									if($scope.charInfo.solMod>0){
										$scope.charInfo.solMod += $scope.charInfo.legitMod;
									}
									Master.Sub1.Table105.roll().then(function(){
										defObj.resolve();
									});
								} else {
									Master.Sub1.Table106.roll().then(function(){
										Master.Sub1.Table107.roll().then(function(){
											Master.Sub1.Table108.roll().then(function(){
												defObj.resolve();
											});
										});
									});
								}
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



