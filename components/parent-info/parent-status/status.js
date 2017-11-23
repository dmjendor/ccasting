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
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						$scope.getPStatus = function(){
						var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't103', cmod:$scope.charInfo.cuMod }
							}
							ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
console.log(parentData)
								if(parentData.tbl!==''){
									var req = {
									 method: 'POST',
									 url: 'getResults.php',
									 data: { table: 't103a', cmod:$scope.charInfo.cuMod }
									}
									ShdFnc.httpRequest(req).then(function(response){
										var parentData = response.data.result;
										$scope.charInfo.parent.status.level = parentData.level;
										$scope.charInfo.survival = parentData.survival;
										$scope.charInfo.solMod = parentData.solmod;
										$scope.charInfo.parent.status.roll = response.data.roll;
										if($scope.charInfo.parent.roll >= 50){
											$scope.getPTitle();
										}
										defObj.resolve();
									});
								} else {
										$scope.charInfo.parent.status.level = parentData.level;
										$scope.charInfo.survival = parentData.survival;
										$scope.charInfo.solMod = parentData.solmod;
										$scope.charInfo.parent.status.roll = response.data.roll;
								}
							});

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getPStatus();
						}

                     }]
                };
            }
        ]);



