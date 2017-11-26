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
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', 'SharedData', function ($scope, $q, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];

						 

						var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
						var req2 = { method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

						$scope.getParents = function(){
							var defObj = $q.defer();
							//clearing existing parent data for re-rolls
							$scope.charInfo.parent = CharData.initParent();
							req.params.table = '114a';
							req.params.lowRoll = daTa.t114a.lowRoll;
							req.params.lowRoll = daTa.t114a.highRoll;
							$scope.ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
								$scope.charInfo.parent.desc = parentData.descrip;
								$scope.charInfo.parent.name = parentData.name;
								$scope.charInfo.parent.roll = 95;
								$scope.charInfo.parent.tbl = parentData.tbl;
								getJob().then(function(){
									defObj.resolve();
								});
							});

							return defObj.promise;
						}

						function getJob(){
							var defObj = $q.defer();
							switch ($scope.charInfo.parent.roll){
								case 13:
								case 14:
									$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl){
										req.params.table = tbl;
										req.params.lowRoll = daTa['t'+tbl].lowRoll;
										req.params.highRoll = daTa['t'+tbl].highRoll;
										req.params.mod = $scope.charInfo.solMod;
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.jobs.head.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});

											$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl2){
												req2.params.table = tbl2;
												req2.params.lowRoll = daTa['t'+tbl2].lowRoll;
												req2.params.highRoll = daTa['t'+tbl2].highRoll;
												req2.params.mod = $scope.charInfo.solMod;
												$scope.ShdFnc.httpRequest(req2).then(function(response){
													var occData2 = response.data.result;
													$scope.charInfo.parent.jobs.head.push({name:occData2.name,desc: occData2.descrip,tbl:occData2.tbl,roll:response.data.roll});	
													defObj.resolve();}
												);
											});
										});
									});
									break;
									case 15:
									case 16:
										$scope.ShdFnc.getModJob($scope.charInfo.culture.level).then(function(tbl){
											req.params.table = tbl;
											req.params.lowRoll = daTa['t'+tbl].lowRoll;
											req.params.highRoll = daTa['t'+tbl].highRoll;
											req.params.mod = $scope.charInfo.solMod;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.jobs.parent2.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
											});
										});
										break;
									case 17:
									case 18:
										$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl){
											req.params.table = tbl;
											req.params.lowRoll = daTa['t'+tbl].lowRoll;
											req.params.highRoll = daTa['t'+tbl].highRoll;
											req.params.mod = $scope.charInfo.solMod;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.jobs.parent1.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});

												$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl2){
													req2.params.table = tbl2;
													req2.params.lowRoll = daTa['t'+tbl2].lowRoll;
													req2.params.highRoll = daTa['t'+tbl2].highRoll;
													req2.params.mod = $scope.charInfo.solMod;
													$scope.ShdFnc.httpRequest(req2).then(function(response){
														var occData2 = response.data.result;
														$scope.charInfo.parent.jobs.parent2.push({name:occData2.name,desc: occData2.descrip,tbl:occData2.tbl,roll:response.data.roll});	
														defObj.resolve();
													});
												});
											});
										});

										break;

									case 19:
										req.params.table = '757a';
										req.params.lowRoll = daTa.t757a.lowRoll;
										req.params.highRoll = daTa.t757a.highRoll;
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.jobs.head.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
											defObj.resolve();
										});
										
										break;
									case 20:
										req.params.table = '978';
										req.params.lowRoll = daTa.t978.lowRoll;
										req.params.highRoll = daTa.t978.highRoll;
										req.data.d1 = 3;
											//$result["tResult"][0]["table"]
											//$resultA = call_user_func($tvar,$result['tResult'][0]['tid']);
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											$scope.charInfo.parent.jobs.head.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
											defObj.resolve();
										});
										break;
									default:
										$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
											req.params.table = tbl;
											req.params.lowRoll = daTa['t'+tbl].lowRoll;
											req.params.highRoll = daTa['t'+tbl].highRoll;											
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												$scope.charInfo.parent.jobs.head.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
												defObj.resolve();
											});
										});
										
									break;
								}
							return defObj.promise;
						}

						function getMilitary(el){

								switch($scope.charInfo.culture.level){
									case 'Primitive':
										el.tbl = '535a1';
										break;
									case 'Nomad':
									case 'Barbarian':
										el.tbl = '535a2';
										break;
									case 'Civilized':
									case 'Civilized-Decadant':
										el.tbl = '535a3';
										break;
									case 'Noble':
										el.tbl = '535a4';
										break;
								}
							
							req.params.table = el.tbl;
							req.params.lowRoll = daTa['t'+el.tbl].lowRoll;
							req.params.highRoll = daTa['t'+el.tbl].highRoll;
							
							$scope.ShdFnc.httpRequest(req).then(function(response){
								var occData = response.data.result;
								el.name += ' - '+occData.name;
								el.desc = occData.descrip;
								el.tbl  = occData.tbl;
								el.roll = response.data.roll;
							});

						}


						$scope.$watch('charInfo.culture.level', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.getParents();
							}
						});

						$scope.$watch('charInfo.parent.jobs.head', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.jobs.head.forEach(function(el){
									if(el.tbl){
										if(el.tbl === '535a'){
											getMilitary(el);
										} else {
											req.params.table = el.tbl;
											req.params.lowRoll = daTa['t'+el.tbl].lowRoll;
											req.params.highRoll = daTa['t'+el.tbl].highRoll;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occData = response.data.result;
												el.name = occData.name;
												el.desc = occData.descrip;
												el.tbl  = occData.tbl;
												el.roll = response.data.roll;
											});
										}										
									}
								});
							}
						},true);

						$scope.$watch('charInfo.parent.jobs.parent1', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.jobs.parent1.forEach(function(el){
									if(el.tbl){
										req.params.table = el.tbl;
										req.params.lowRoll = daTa['t'+el.tbl].lowRoll;
										req.params.highRoll = daTa['t'+el.tbl].highRoll;
										
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

						$scope.$watch('charInfo.parent.jobs.parent2', function (newValue, oldValue) {
							if((newValue!==oldValue)&&($scope.charInfo.generateFull)){
								$scope.charInfo.parent.jobs.parent2.forEach(function(el){
									if(el.tbl){
										req.params.table = el.tbl;
										req.params.lowRoll = daTa['t'+el.tbl].lowRoll;
										req.params.highRoll = daTa['t'+el.tbl].highRoll;

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



