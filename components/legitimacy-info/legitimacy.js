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
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						$scope.getLegitimacy = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't105', d1: $scope.charInfo.cuMod }
							}

							// if there was a legit mod before, remove it.
							$scope.charInfo.solMod -= $scope.legitMod;
							//Roll legitimacy dice
							$scope.charInfo.legitimacy.lRoll = Math.floor((Math.random() * 20) + 1)
							//If you are from a primitive culture and rolled a 20 you are automatically illegitimate
							if(($scope.charInfo.culture.level==='Primitive')&&($scope.charInfo.legitimacy.lRoll === 20)){
								$scope.charInfo.legitMod = Math.floor((Math.random() * 4) + 1);
							//Otherwise if your cuMod + your legitimacy roll are 19+ you are illegitimate
							} else if(($scope.charInfo.cuMod+$scope.charInfo.legitimacy.lRoll)>18){
								$scope.charInfo.legitMod = Math.floor((Math.random() * 4) + 1);
							}

							if($scope.charInfo.legitMod){
								//if you are illegitimate and have a positive solMod, reduce your solMod by the legitMod
								if($scope.charInfo.solMod>0){
									$scope.charInfo.solMod += $scope.charInfo.legitMod;
								}
								ShdFnc.httpRequest(req).then(function(response){
									var legitimacyData = response.data.result;
									if(legitimacyData.tbl != ''){
										var req = {
										 method: 'POST',
										 url: 'getResults.php',
										 data: { table: 't105', d1: $scope.charInfo.cuMod }
										}
										ShdFnc.httpRequest(req).then(function(response){
											var legitimacyData = response.data.result;
											$scope.charInfo.legitimacy.name = legitimacyData.name;
											$scope.charInfo.legitimacy.desc = legitimacyData.descrip;
											$scope.charInfo.legitimacy.roll = response.data.roll;
											$scope.charInfo.legitimacy.tbl = legitimacyData.tbl;
											defObj.resolve();
										});
									} else {
										$scope.charInfo.legitimacy.name = legitimacyData.name;
										$scope.charInfo.legitimacy.desc = legitimacyData.descrip;
										$scope.charInfo.legitimacy.roll = response.data.roll;
										defObj.resolve();
									}
								});
							} else {
								defObj.resolve();
							}
							

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getLegitimacy();
						}

                     }]
                };
            }
        ]);



