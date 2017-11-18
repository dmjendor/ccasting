window.angular.module('castingApp.controllers.base', [])
    .controller('baseController', ['$scope', '$rootScope', '$q', '$http', 'CharData', 'SharedFunctions',
        function($scope,$rootScope,$q,$http,CharData,ShdFnc){
            'use strict';

			$scope.charInfo = CharData;

			function fLoop(tNum,obj,deferred){
				if(!deferred) {
					deferred = $q.defer();
				}

				var req = {
				 method: 'POST',
				 url: 'getResults.php',
				 data: { table: tNum }
				}
				ShdFnc.httpRequest(req).then(function(response){
					var data = response.data.result;
					if (data.tbl != '') {
						obj.push(response.data);
						fLoop(data.tbl, obj, deferred);
					} else {
						obj.push(response.data);
						deferred.resolve();
					}
				});			
				return deferred.promise;
			}



			

			

			$scope.getPStatus = function(cuMod){
			var defObj = $q.defer();
				var req = {
				 method: 'POST',
				 url: 'getResults.php',
				 data: { table: 't103', cmod:cuMod }
				}
				ShdFnc.httpRequest(req).then(function(response){
					var parentData = response.data.result;
					console.log(response);
					$scope.charInfo.parents.level = parentData.level;
					$scope.charInfo.survival = parentData.survival;
					$scope.charInfo.solMod = parentData.solmod;
					$scope.charInfo.parents.roll = response.data.roll;
					if($scope.charInfo.parents.roll >= 50){
						$scope.getPTitle();
					}
					defObj.resolve();
				});

				return defObj.promise;
			}

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
					var dex = response.data.result.timod.split('d');
					var dTop = dex[1]*dex[0];
					$scope.charInfo.tiMod = Math.floor((Math.random() * dTop) + 1);

				});

			}



			$scope.charInfoacterWizard = function(){

			}
    }
  ]);
