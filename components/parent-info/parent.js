'use strict';
window.angular.module('castingApp.components.parent', [])
        .directive('parentInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData;

						$scope.getParents = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't114a',d1: $scope.charInfo.culture.Level }
							}
							ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
								var job = '';
								var job2 = '';
								var tvar = '';
								var tvar2 = '';
								var req = {	method: 'POST', url: 'getResults.php', data: { table: tvar } };
								var req2 = { method: 'POST', url: 'getResults.php', data: { table: tvar2 } };

								switch (response.data.roll){
									case 13:
										job = getJob($scope.charInfo.culture.level,0);
										tvar = "t".job;
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										job2 = jobSelect($scope.charInfo.culture.level,-1);
										tvar2 = "t".job2;

										ShdFnc.httpRequest(req2).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)										});
										break;
									case 14:
										job = getJob($scope.charInfo.culture.level,0);
										tvar = "t".job;
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										$job = getJob($social,"-1");
										$tvar = "t".$job;
										ShdFnc.httpRequest(req2).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)										});
										break;
										break;
									case 15:
										job = getModJob(culture);
										tvar = "t".job;
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										break;
									case 16:
										job = getModJob(culture);
										tvar = "t".job;
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										break;
									case 17:
										job = getJob($scope.charInfo.culture.level,0);
										tvar = "t".job;
										
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.parent1.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										job2 = getJob(social);
										tvar = "t".job2;
											ShdFnc.httpRequest(req2).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.parent2.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										break;
									case 18:
										job = getJob($scope.charInfo.culture.level,0);
										tvar = "t".job;
										ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.parent1.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										job2 = getJob(social);
										tvar = "t".job2;
											ShdFnc.httpRequest(req2).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.parent2.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
										});
										break;
									case 19:
										
										foreach (parentData.tResult as table => sub) {
											foreach (sub as k => v) {
												if(k == "table"){
													job = getModJob(culture);
													tvar = "t".job;
													ShdFnc.httpRequest(req).then(function(response){
														var occData = response.data.result;
														$scope.charInfo.parent.headHousehold.jobs.push {name:occData.name,desc: occData.descrip,roll:response.data.roll)
													});
												}
											}
										}
										break;
									case 20:
											echo "Primary Occupation: ";
											$tvar = "t".$result["tResult"][0]["table"];
											$resultA = call_user_func($tvar,$result['tResult'][0]['tid']);
											echo "<span style='color:#000'>".$resultA["result"]["descrip"]."</span>";
										break;
									default:
										$job = getJob($scope.charInfo.culture.level);
										$tvar = "t".$job;
										echo "Primary Occupation: ";
										$result = call_user_func($tvar);
										echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
										break;
								}
								$scope.charInfo.parent.name = parentData.name;
								$scope.charInfo.parent.desc = parentData.descrip;
								$scope.charInfo.parent.roll = response.data.roll;
								defObj.resolve();
								
							});

							return defObj.promise;
						}

						$scope.$watch('charInfo.culture.level', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.getParents();
							}
						});

                     }]
                };
            }
        ]);



