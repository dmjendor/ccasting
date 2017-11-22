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
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						$scope.getRace = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't101' }
							}
							ShdFnc.httpRequest(req).then(function(response){
								var raceData = response.data.result;
								if(raceData.tbl != ''){
									var req = {
									 method: 'POST',
									 url: 'getResults.php',
									 data: { table: 't101a' }
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



