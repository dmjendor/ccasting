'use strict';
window.angular.module('castingApp.components.culture', [])
        .directive('cultureInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/culture-info/culture.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData;

						$scope.getCulture = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't102' }
							}
							ShdFnc.httpRequest(req).then(function(response){
								var cultureData = response.data.result;
								console.log(response);
								$scope.charInfo.culture.level = cultureData.level;
								$scope.charInfo.culture.desc = cultureData.descrip;
								$scope.charInfo.culture.roll = response.data.roll;
								$scope.charInfo.cuMod = cultureData.cumod;
								$scope.charInfo.native = cultureData.native;
								defObj.resolve();
							});

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getCulture();
						}

                     }]
                };
            }
        ]);



