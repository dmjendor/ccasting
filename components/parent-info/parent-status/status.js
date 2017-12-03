'use strict';
window.angular.module('castingApp.components.parent.status', [])
        .directive('parentStatus', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-status/status.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', 'SharedData', function ($scope, $q, CharData, ShdFnc, SharedData) {

						$scope.charInfo = CharData.Character;
						var daTa = SharedData.tables[0];

						$scope.getPStatus = function(){
						var defObj = $q.defer();
							$scope.charInfo.parent.status = CharData.initStatus();
							$scope.charInfo.parent.land = CharData.initLand();

							var req = {	method: 'GET', url: 'getData.php', params: { table: '103' , lowRoll: daTa.t103.lowRoll, highRoll: daTa.t103.highRoll, mod: daTa.t103.modifier} };
							req.params.lowRoll = 99;
							req.params.highRoll = 100;
							ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;

								if(parentData.tbl!==''){
									req.params.table = parentData.tbl;

									ShdFnc.httpRequest(req).then(function(response){
										var parentData = response.data.result;
										$scope.charInfo.parent.status.level = parentData.level;
										$scope.charInfo.parent.status.name = parentData.name;
										$scope.charInfo.parent.status.desc = parentData.descrip;
										$scope.charInfo.survival = parentData.survival;
										$scope.charInfo.solMod = parentData.solmod;
										if($scope.charInfo.parent.status.roll > 95){
											var EW = Math.floor((Math.random() * 100) + 1);
											if (($scope.charInfo.tiMod+1)>=EW){
												$scope.charInfo.parent.status.level = 'Extremely Wealthy';
											}
										}
										if($scope.charInfo.parent.status.roll >= 99){
												$scope.getSolMod($scope.charInfo.cuMod)
										}
										defObj.resolve();
									});
								} else {
										$scope.charInfo.parent.status.level = parentData.level;
										$scope.charInfo.parent.status.name = parentData.name;
										$scope.charInfo.parent.status.desc = parentData.descrip;
										$scope.charInfo.parent.status.roll = response.data.roll;
										$scope.charInfo.survival = parentData.survival;
										$scope.charInfo.solMod = parentData.solmod;

								}
							});

							return defObj.promise;
						}

						$scope.getSolMod = function(mod){
							var SolRoll = Math.floor((Math.random() * 100) + 1)+mod;
							if(SolRoll>99){
								$scope.charInfo.solMod = 10;
							} else if(SolRoll>=95){
								var EW = Math.floor((Math.random() * 100) + 1);
								if (($scope.charInfo.tiMod+1)>=EW){
									$scope.charInfo.parent.status.level = 'Extremely Wealthy Noble';
									$scope.charInfo.solMod = 13;
								} else {
									$scope.charInfo.solMod = 9;
								}
							} else if(SolRoll>=86){
								$scope.charInfo.solMod = 7;
							} else if(SolRoll===85){
								$scope.getSolMod(0);
							} else if(SolRoll>=41){
								$scope.charInfo.solMod = 5;
							} else if(SolRoll>=13){
								$scope.charInfo.solMod = 4;
							} else {
								$scope.charInfo.solMod = 2;
							}
						}


						if($scope.charInfo.generateFull){
							$scope.getPStatus();
						}

                     }]
                };
            }
        ]);



