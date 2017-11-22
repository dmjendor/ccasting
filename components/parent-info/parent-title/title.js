'use strict';
window.angular.module('castingApp.components.parent.title', [])
        .directive('parentTitle', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-title/title.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						$scope.getPTitle = function(){
							var tNum = 't758a1';

							switch ($scope.charInfo.culture.level){
								case "Primitive":
									tNum = 't758a1';
								break;
								case "Nomad":
									tNum = 't758a2';
								break;
								case "Barbarian":
									tNum = 't758a3';
								break;
								case "Civilized":
								case "Civilized-Decadent":
									tNum = 't758a4';
								break;
							}
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: tNum }
							}

							ShdFnc.httpRequest(req).then(function(response){
								var tData = response.data.result;
								$scope.charInfo.parent.land.titleCount = ShdFnc.dRoll(tData.LandTitles);
								$scope.charInfo.parent.land.holdPct = parseInt(tData.LandHoldings);
								$scope.charInfo.parent.land.holdRoll = Math.floor((Math.random() * 100) + 1);
								$scope.charInfo.parent.land.sizeDice = tData.Size;
								if($scope.charInfo.parent.land.holdRoll >= 98){
									$scope.charInfo.parent.land.titleCount = 1;
									$scope.charInfo.parent.land.titles.push({name:'Exiled',desc:'Your parents were exiled, thier lands and titles were forfeited',roll:0});
									$scope.charInfo.parent.land.size = 0;
								} else if($scope.charInfo.parent.land.holdRoll <= $scope.charInfo.parent.land.holdPct){
									for(var i=0;i<=$scope.charInfo.parent.land.titleCount;i++){
										var req = {
										 method: 'POST',
										 url: 'getResults.php',
										 data: { table: 't871a' }
										}
										var titleName = '';
										var titleRolls = ''; 
										ShdFnc.httpRequest(req).then(function(response){
											var tData = response.data.result;
											titleName = tData.name+' ';
											titleRolls = response.data.roll+',';
											var req = {
											 method: 'POST',
											 url: 'getResults.php',
											 data: { table: 't871b' }
											}

											ShdFnc.httpRequest(req).then(function(response){
												var tData = response.data.result;
												titleName += tData.name+' ';
												titleRolls += response.data.roll+',';
												var req = {
												 method: 'POST',
												 url: 'getResults.php',
												 data: { table: 't871c' }
												}
												titleName += tData.name;
												ShdFnc.httpRequest(req).then(function(response){
													var tData = response.data.result;
													titleName += tData.name;
													titleRolls += response.data.roll;
													$scope.charInfo.parent.land.titles.push({name:titleName,desc:'',roll:titleRolls});
												});
											});
										});
									}
									$scope.charInfo.parent.land.size = ShdFnc.dRoll(tData.Size);
								}


								$scope.charInfo.tiMod = ShdFnc.dRoll(tData.TiMod);

							});

						}

	
						$scope.$watch('charInfo.culture.level', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.getPTitle();
							}
						});

                     }]
                };
            }
        ]);



