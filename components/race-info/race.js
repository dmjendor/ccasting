'use strict';
window.angular.module('castingApp.components.race', [])
        .directive('raceInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/race-info/race.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedData', 'SharedFunctions', function ($scope, $q, CharData, SharedData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						var daTa = SharedData.tables[0];

						$scope.getRace = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'GET',
							 url: 'getData.php',
							 params: { table: '101', lowRoll: daTa.t101.lowRoll, highRoll: daTa.t101.highRoll }
							}
							ShdFnc.httpRequest(req).then(function(response){
								var raceData = response.data.result;
								if(raceData.tbl != ''){
									var req = {
									 method: 'POST',
									 url: 'getData.php',
									 params: { table: '101a', lowRoll: daTa.t101a.lowRoll, highRoll: daTa.t101a.highRoll }
									}
									ShdFnc.httpRequest(req).then(function(response){
										var raceData = response.data.result;
										$scope.charInfo.race.name = raceData.name;
										$scope.charInfo.race.desc = raceData.descrip;
										$scope.charInfo.race.roll = response.data.roll;
										$scope.charInfo.race.tbl = raceData.tbl;
										defObj.resolve();
									});
								} else {
									$scope.charInfo.race.name = raceData.name;
									$scope.charInfo.race.desc = raceData.descrip;
									$scope.charInfo.race.roll = response.data.roll;
									defObj.resolve();
								}
							});

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getRace();
						}

                     }]
                };
            }
        ]);



