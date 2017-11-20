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
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, SharedFunctions) {

						$scope.charInfo = CharData;
						$scope.ShdFnc = SharedFunctions

						$scope.getParents = function(){
							var defObj = $q.defer();
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't114a',d1: $scope.charInfo.culture.Level }
							}
							$scope.ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
								var job = '';
								var job2 = '';
								var req = {	method: 'POST', url: 'getResults.php', data: { table: '' } };
								var req2 = { method: 'POST', url: 'getResults.php', data: { table: '' } };
								var culture = $scope.charInfo.culture.level;
								var social = '978a';

								switch (response.data.roll){

									default:
										$scope.ShdFnc.getMobJob(culture).then(function(tbl){
											req.data.table = "t"+tbl;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
											});
										});
										job = $scope.ShdFnc.getModJob(culture);
										tvar = "t".job;
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
										});
										break;
										break;
									case 13:
											$scope.ShdFnc.getJob(culture,0).then(function(tbl){
											req.data.table = "t"+tbl;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});

												$scope.ShdFnc.getJob(culture,-1).then(function(tbl2){
													req2.data.table = "t"+tbl2;

													$scope.ShdFnc.httpRequest(req2).then(function(response){
														var occData2 = response.data.result;
														$scope.charInfo.parent.headHousehold.jobs.push({name:occData2.name,desc: occData2.descrip,roll:response.data.roll});	
														defObj.resolve();}
													);
												});
											});
										});
										
										
										break;
									case 14:
										$scope.ShdFnc.getJob(culture,0).then(function(tbl){
											req.data.table = "t"+tbl;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});

												$scope.ShdFnc.getJob(social,-1).then(function(tbl2){
													req2.data.table = "t"+tbl2;

													$scope.ShdFnc.httpRequest(req2).then(function(response){
														var occData2 = response.data.result;
														$scope.charInfo.parent.headHousehold.jobs.push({name:occData2.name,desc: occData2.descrip,roll:response.data.roll});	
														defObj.resolve();}
													);
												});
											});
										});
										break;
										case 15:
										case 16:
											$scope.ShdFnc.getMobJob(culture).then(function(tbl){
												req.data.table = "t"+tbl;
												$scope.ShdFnc.httpRequest(req).then(function(response){
													var occData = response.data.result;
													$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
												});
											});
											break;
										case 17:
										case 18:
											$scope.ShdFnc.getJob(culture,0).then(function(tbl){
											req.data.table = "t"+tbl;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.parent1.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});

												$scope.ShdFnc.getJob(social,0).then(function(tbl2){
													req2.data.table = "t"+tbl2;

													$scope.ShdFnc.httpRequest(req2).then(function(response){
														var occData2 = response.data.result;
														$scope.charInfo.parent.parent2.jobs.push({name:occData2.name,desc: occData2.descrip,roll:response.data.roll});	
														defObj.resolve();}
													);
												});
											});
										});

											break;

										case 19:
											parentData.tResult.forEach(function(el){
											el.foreach(function(ele){									
												job = $scope.ShdFnc.getModJob(culture);
												tvar = "t".job;
												$scope.ShdFnc.httpRequest(req).then(function(response){
													var occData = response.data.result;
													$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
													defObj.resolve();
												});
											});
										});
											break;
										case 20:
											req.data.table = "t".parentData.tbl;
											req.data.d1 = 5;
												//$result["tResult"][0]["table"]
												//$resultA = call_user_func($tvar,$result['tResult'][0]['tid']);
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
												defObj.resolve();
											});
											break;
										default:
											req.data.table = "t"+$scope.ShdFnc.getJob(culture);
											
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,roll:response.data.roll});
												defObj.resolve();
											});
										break;
								}

								
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



