'use strict';
window.angular.module('castingApp.components.parent.titles', [])
        .directive('parentTitle', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-titles/titles.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', 'SharedData', function ($scope, $q, CharData, ShdFnc, SharedData) {

						$scope.charInfo = CharData.Character;
						var daTa = SharedData.tables[0];
						var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

						$scope.getPTitle = function(){
							var defObj = $q.defer();
							var tNum = 't758a1';

							switch ($scope.charInfo.culture.level){
								case "Primitive":
									tNum = '758a1';
								break;
								case "Nomad":
									tNum = '758a2';
								break;
								case "Barbarian":
									tNum = '758a3';
								break;
								case "Civilized":
								case "Civilized-Decadent":
									tNum = '758a4';
								break;
							}
							
							req.params.table = tNum;
							req.params.lowRoll = daTa['t'+tNum].lowRoll;
							req.params.highRoll = daTa['t'+tNum].highRoll;
							ShdFnc.httpRequest(req).then(function(response){
								var tData = response.data.result;
								$scope.charInfo.parent.status.name = tData.name;
								$scope.charInfo.parent.status.desc = tData.descrip;
								$scope.charInfo.parent.land.titleDice = tData.LandTitles;
								var ltInt = parseInt(tData.LandTitles);								
								if(tData.LandTitles.includes('d')) {
									$scope.charInfo.parent.land.titleCount = ShdFnc.dRoll(tData.LandTitles);
								} else if(tData.LandTitles.includes('%')) {
									var ltRoll = Math.floor((Math.random() *100)+1);
									$scope.charInfo.parent.land.titleRoll = ltRoll;
									$scope.charInfo.parent.land.titleCount = ltRoll<ltInt?1:0;
								}else {
									$scope.charInfo.parent.land.titleCount = ltInt>0?ltInt:0;
								}

								
								$scope.charInfo.parent.land.holdPct = parseInt(tData.LandHoldings);
								$scope.charInfo.parent.land.holdRoll = Math.floor((Math.random() * 100) + 1);
								$scope.charInfo.parent.land.sizeDice = tData.Size;
								if($scope.charInfo.parent.land.holdRoll >= 98){
									$scope.charInfo.parent.land.titleCount = 1;
									$scope.charInfo.parent.land.titles.push({name:'Exiled',desc:'Your parents were exiled, thier lands and titles were forfeited',roll:0});
									$scope.charInfo.parent.land.size = 0;
								} else if($scope.charInfo.parent.land.holdRoll <= $scope.charInfo.parent.land.holdPct){
									$scope.charInfo.parent.land.size = ShdFnc.dRoll(tData.Size);
								} else {
									$scope.charInfo.parent.land.size = 0;
								}

								if($scope.charInfo.parent.land.titleCount>0){
									for(var i=1;i<=$scope.charInfo.parent.land.titleCount;i++){
										$scope.generateTitle(i-1);
									};
								}


								$scope.charInfo.tiMod = ShdFnc.dRoll(tData.TiMod);
								defObj.resolve();
							});
							return defObj.promise;
						}
						
						$scope.generateTitle = function(index){
							req.params.table = '871a';
							req.params.lowRoll = daTa.t871a.lowRoll;
							req.params.highRoll = daTa.t871a.highRoll;
							var titleName = '';
							var titleRolls = ''; 
							ShdFnc.httpRequest(req).then(function(response){
								var tData = response.data.result;
								titleName = tData.name+' ';
								titleRolls = response.data.roll+',';
								req.params.table = '871b';
								req.params.lowRoll = daTa.t871b.lowRoll;
								req.params.highRoll = daTa.t871b.highRoll;

								ShdFnc.httpRequest(req).then(function(response){
									var tData = response.data.result;
									titleName += tData.name+' ';
									titleRolls += response.data.roll+',';
									req.params.table = '871c';
									req.params.lowRoll = daTa.t871c.lowRoll;
									req.params.highRoll = daTa.t871c.highRoll;
									ShdFnc.httpRequest(req).then(function(response){
										var tData = response.data.result;
										titleName += tData.name;
										titleRolls += response.data.roll;
										$scope.charInfo.parent.land.titles[index] = {name:titleName,desc:'',roll:titleRolls};
									});
								});
							});
						};
	
						$scope.$watch('charInfo.parent.status.roll', function (newValue, oldValue) {
							if($scope.charInfo.parent.status.roll>=99){
								$scope.getPTitle();
							}
						});

                     }]
                };
            }
        ]);



