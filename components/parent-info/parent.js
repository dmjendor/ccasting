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

						var req = {	method: 'POST', url: 'getResults.php', data: { table: '' } };
						var req2 = { method: 'POST', url: 'getResults.php', data: { table: '' } };

						$scope.getParents = function(){
							var defObj = $q.defer();
							//clearing existing parent data for re-rolls
							$scope.charInfo.parent = {
								level: '',
								desc: '',
								roll: 0,
								tbl: '',
								title: '',
								landTitles: '',
								landHoldings: '',
								landSize: 0,
								headHousehold: {
									name: '',
									desc: '',
									roll: 0,
									tbl: '',
									jobs: []
								},
								parent1: {
									jobs: []
								},
								parent2: {
									jobs: []
								},
								noteWorthy: []
							}
							var req = {
							 method: 'POST',
							 url: 'getResults.php',
							 data: { table: 't114a',d1: $scope.charInfo.culture.Level }
							}
							$scope.ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
								$scope.charInfo.parent.desc = parentData.descrip;
								$scope.charInfo.parent.name = parentData.name;
								$scope.charInfo.parent.roll = response.data.roll;
								$scope.charInfo.parent.tbl = parentData.tbl;
								switch (response.data.roll){
									case 13:
									case 14:
										$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
											req.data.table = "t"+tbl;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});

												$scope.ShdFnc.getJob($scope.charInfo.culture.level,parseInt($scope.charInfo.solMod-1)).then(function(tbl2){
													req2.data.table = "t"+tbl2;

													$scope.ShdFnc.httpRequest(req2).then(function(response){
														var occData2 = response.data.result;
														$scope.charInfo.parent.headHousehold.jobs.push({name:occData2.name,desc: occData2.descrip,tbl:occData2.tbl,roll:response.data.roll});	
														defObj.resolve();}
													);
												});
											});
										});
										break;
										case 15:
										case 16:
											$scope.ShdFnc.getModJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
												req.data.table = "t"+tbl;
												$scope.ShdFnc.httpRequest(req).then(function(response){
													var occData = response.data.result;
													$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
												});
											});
											break;
										case 17:
										case 18:
											$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
												req.data.table = "t"+tbl;
												$scope.ShdFnc.httpRequest(req).then(function(response){
													var occData = response.data.result;
													$scope.charInfo.parent.parent1.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});

													$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl2){
														req2.data.table = "t"+tbl2;

														$scope.ShdFnc.httpRequest(req2).then(function(response){
															var occData2 = response.data.result;
															$scope.charInfo.parent.parent2.jobs.push({name:occData2.name,desc: occData2.descrip,tbl:occData2.tbl,roll:response.data.roll});	
															defObj.resolve();
														});
													});
												});
											});

											break;

										case 19:
											req.data.table = "t757a";
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
												defObj.resolve();
											});
											
											break;
										case 20:
											req.data.table = "t978";
											req.data.d1 = 3;
												//$result["tResult"][0]["table"]
												//$resultA = call_user_func($tvar,$result['tResult'][0]['tid']);
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
												defObj.resolve();
											});
											break;
										default:
											$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
												req.data.table = "t"+tbl;
												
												$scope.ShdFnc.httpRequest(req).then(function(response){
													var occData = response.data.result;
													$scope.charInfo.parent.headHousehold.jobs.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
													defObj.resolve();
												});
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

						$scope.$watch('charInfo.parent.headHousehold.jobs', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.headHousehold.jobs.forEach(function(el){
									if(el.tbl){
										req.data.table = "t"+el.tbl;
										
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											el.name = occData.name;
											el.desc = occData.descrip;
											el.tbl  = occData.tbl;
											el.roll = response.data.roll;
										});
									}
								});
							}
						},true);

						$scope.$watch('charInfo.parent.parent1.jobs', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.parent1.jobs.forEach(function(el){
									if(el.tbl){
										req.data.table = "t"+el.tbl;
										
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											el.name = occData.name;
											el.desc = occData.descrip;
											el.tbl  = occData.tbl;
											el.roll = response.data.roll;
										});
									}
								});
							}
						},true);

						$scope.$watch('charInfo.parent.parent2.jobs', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.parent2.jobs.forEach(function(el){
									if(el.tbl){
										req.data.table = "t"+el.tbl;

										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											el.name = occData.name;
											el.desc = occData.descrip;
											el.tbl  = occData.tbl;
											el.roll = response.data.roll;
										});
									}
								});
							}
						},true);

                     }]
                };
            }
        ]);



