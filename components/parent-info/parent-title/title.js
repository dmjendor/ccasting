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

						$scope.charInfo = CharData;

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
								$scope.charInfo.parent.landTitles = tData.LandTitles;
								$scope.charInfo.parent.landHoldings = tData.LandHoldings;
								$scope.charInfo.parent.landSize = ShdFnc.dRoll(tData.Size);
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



