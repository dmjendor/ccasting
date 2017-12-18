'use strict';
window.angular.module('castingApp.components.parent.jobs', [])
        .directive('parentJobs', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-jobs/jobs.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', 'SharedData', function ($scope, $q, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];


						var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
						var req2 = { method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

						$scope.getParentsJobStatus = function(){
							var defObj = $q.defer();
							delete req.params.mod;
							delete req2.params.mod;
							delete req.params.id;
							delete req2.params.id;
							//clearing existing parent data for re-rolls
							$scope.charInfo.parent.jobs = CharData.initJobs();
							$scope.charInfo.parent.military = CharData.initMilitary();
							req.params.table = '114a';
							req.params.lowRoll = daTa.t114a.lowRoll;
							req.params.highRoll = daTa.t114a.highRoll;
							$scope.ShdFnc.httpRequest(req).then(function(response){
								var parentData = response.data.result;
								$scope.charInfo.parent.desc = parentData.descrip;
								$scope.charInfo.parent.name = parentData.name;
								$scope.charInfo.parent.roll = response.data.roll;
								$scope.charInfo.parent.tbl = parentData.tbl;
								$scope.getJobs().then(function(){
								defObj.resolve();
								});
							});

							return defObj.promise;
						}

						$scope.getJobs = function(){
							var defObj = $q.defer();
							switch ($scope.charInfo.parent.roll){
								case 13:
								case 14:
									$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl){
										req.params.table = tbl;
										req.params.lowRoll = daTa['t'+tbl].lowRoll;
										req.params.highRoll = daTa['t'+tbl].highRoll;
										if(daTa['t'+tbl].modifier){
											req.params.mod = daTa['t'+tbl].modifier;
										}
										jobLoop(req,$scope.charInfo.parent.jobs.head).then(function(){
											$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl2){
												req2.params.table = tbl2;
												req2.params.lowRoll = daTa['t'+tbl2].lowRoll;
												req2.params.highRoll = daTa['t'+tbl2].highRoll;
												if(daTa['t'+tbl].modifier){
													req2.params.mod = daTa['t'+tbl].modifier;
												}
												jobLoop(req,$scope.charInfo.parent.jobs.head,1).then(function(){
													defObj.resolve();
												});
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
											if(daTa['t'+tbl].modifier){
												req.params.mod = daTa['t'+tbl].modifier;
											}
											jobLoop(req,$scope.charInfo.parent.jobs.parent2).then(function(){
												defObj.resolve();
											});
										});
										break;
									case 17:
									case 18:
										$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl){
											req.params.table = tbl;
											req.params.lowRoll = daTa['t'+tbl].lowRoll;
											req.params.highRoll = daTa['t'+tbl].highRoll;
											if(daTa['t'+tbl].modifier){
												req.params.mod = daTa['t'+tbl].modifier;
											}
											jobLoop(req,$scope.charInfo.parent.jobs.parent1).then(function(){
												$scope.ShdFnc.getJob($scope.charInfo.culture.level).then(function(tbl2){
													req2.params.table = tbl2;
													req2.params.lowRoll = daTa['t'+tbl2].lowRoll;
													req2.params.highRoll = daTa['t'+tbl2].highRoll;
													if(daTa['t'+tbl].modifier){
														req2.params.mod = daTa['t'+tbl].modifier;
													}
													jobLoop(req,$scope.charInfo.parent.jobs.parent2).then(function(){
														defObj.resolve();
													});
												});
											});
										});

										break;

									case 19:
										req.params.table = '757a';
										req.params.lowRoll = 1;
										req.params.highRoll = 19;
										var advType = '';
										var advDesc = '';
										var advRolls = '';
										$scope.ShdFnc.httpRequest(req).then(function(response){
											var occData = response.data.result;
											advType = occData.name;
											advDesc = occData.descrip;
											advRolls = response.data.roll;
											req.params.table = '757b';
											req.params.lowRoll = 1;
											req.params.highRoll = 20;
											$scope.ShdFnc.httpRequest(req).then(function(response){
												var occRank = response.data.result;
												advType += ' - '+occRank.name;
												advDesc +- ', '+occRank.descrip;
												advRolls += ','+response.data.roll;
												$scope.charInfo.parent.jobs.head.push({name:advType,desc: advDesc,roll:advRolls});
												defObj.resolve();
											});
										});										
										break;
									case 20:
										req.params.table = '978';
										req.params.lowRoll = daTa.t978.lowRoll;
										req.params.highRoll = daTa.t978.highRoll;
										req.params.id = 3;
										req.params.mod = 0;

										$scope.ShdFnc.httpRequest(req).then(function(response){
											var table = response.data.result.tbl;
											req.params.table = table;
											req.params.lowRoll = daTa['t'+table].lowRoll;
											req.params.highRoll = daTa['t'+table].highRoll;
											delete req.params.id;
											delete req.params.mod;
											jobLoop(req,$scope.charInfo.parent.jobs.head).then(function(){
												defObj.resolve();
											});
										});
										break;
									default:
										$scope.ShdFnc.getJob($scope.charInfo.culture.level,$scope.charInfo.solMod).then(function(tbl){
											req.params.table = tbl;
											req.params.lowRoll = daTa['t'+tbl].lowRoll;
											req.params.highRoll = daTa['t'+tbl].highRoll;
											if(daTa['t'+tbl].modifier){
												req.params.mod = daTa['t'+tbl].modifier;
											}
											//jobLoop(req,$scope.charInfo.parent.jobs.head).then(function(){
											//	defObj.resolve();
											//});
											$scope.ShdFnc.tDive(req,$scope.charInfo.parent.jobs.head,true).then(function(){
												defObj.resolve();
											});
//											$scope.ShdFnc.httpRequest(req).then(function(response){
//												var occData = response.data.result;
//												$scope.charInfo.parent.jobs.head.push({name:occData.name,desc: occData.descrip,tbl:occData.tbl,roll:response.data.roll});
//											});
										});
										
									break;
								}
							return defObj.promise;
						}

						function jobLoop(req,obj,index,deferred){
							if(!deferred) {
								//if the deferred promise does not exist, define it.
								deferred = $q.defer();
							}
							// if the index does not exist, define it.
							var index = index?index:0;

							$scope.ShdFnc.httpRequest(req).then(function(response){
								var data = response.data.result;
								if(!data.name){
									console.log('stop');
								}
								if(obj[index]){
									obj[index].name = obj[index].name+' - '+data.name;
									obj[index].roll = obj[index].roll+', '+response.data.roll;
									obj[index].desc = data.descrip;
								} else {
									obj[index] = {name: data.name,roll:response.data.roll,desc:data.descrip};
								}
								if (data.tbl) {
									var tArray = new Array();
									// when multiple tables are present, split the tables into an array
									var tables = data.tbl.split(',');
									tables.forEach(function(el){
										if(el.includes('[')){
											var regex = /(?:.*?)\[(.*?)\]/gi;
											var iChk = regex.exec(el);
											var count = 0;
											if(iChk.includes('d')){
												count = $scope.ShdFnc.dRoll(iChk);
											} else {
												count = parseInt(regex.exec(el));
											}
											for (var i=0;i<count;i++){
													tArray.push(el);
											}
										} else {
											tArray.push(el);
										}
									});
									tArray.forEach(function(el){
										if(el === '535a'){
											getMilitary(data).then(function(data){
												
											});
										} else if(el.includes('534')) {
											$scope.charInfo.parent.underworld.count++;
										} else {
											req.params.table = el;
											req.params.lowRoll = daTa['t'+el].lowRoll;
											req.params.highRoll = daTa['t'+el].highRoll;
											jobLoop(req, obj, index, deferred);
										}
									});
								} else {
									deferred.resolve();
								}

							});

							return deferred.promise;
						}

						function getMilitary(el){
							var defObj = $q.defer();
								switch($scope.charInfo.culture.level){
									case 'Primitive':
										el.tbl = '535a1';
										break;
									case 'Nomad':
									case 'Barbarian':
										el.tbl = '535a2';
										break;
									case 'Civilized':
									case 'Civilized-Decadent':
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
								defObj.resolve(response);
							});
							return defObj.promise;
						}

						$scope.$watch('charInfo.culture.level', function (newValue, oldValue) {
							if($scope.charInfo.generateFull){
								$scope.getParentsJobStatus();
							}
						});
                     }]
                };
            }
        ]);



