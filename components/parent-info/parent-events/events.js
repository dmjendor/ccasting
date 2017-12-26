'use strict';
window.angular.module('castingApp.components.parent.events', [])
        .directive('parentEvents', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-events/events.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope','$q','FunctionGroup', 'CharData', 'SharedFunctions', 'SharedData', 
						function ($scope, $q, Master, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];

						$scope.getEvents = function(){
							
							$scope.charInfo.parent.events = CharData.initItemsList();
							//for(var i=0;i<count;i++){
								Master.Sub1.Table5.roll();
							//}
						}

						//$scope.getNotes = function(){
						//	var defObj = $q.defer();
						//	$scope.charInfo.parent.noteWorthy.items = [];
					//		var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
					//		
					//		for(var i=0;i<$scope.charInfo.parent.noteWorthy.count;i++){
					//			req.params.table = '114b';
					//			req.params.lowRoll = daTa.t114b.lowRoll;
					//			req.params.highRoll = daTa.t114b.highRoll;
					//			noteLoop(req,$scope.charInfo.parent.noteWorthy.items,i).then(function(){
					//				if(i===$scope.charInfo.parent.noteWorthy.count){
					//					defObj.resolve();
					//				}
					//			});
//
//							}
//
//							
//
//							return defObj.promise;
//						}

						function noteLoop(req,obj,index,deferred){
							if(!deferred) {
								//if the deferred promise does not exist, define it.
								deferred = $q.defer();
							}
							// if the index does not exist, define it.
							var index = index?index:0;
							var stop = false;

							$scope.ShdFnc.httpRequest(req).then(function(response){
								delete req.params.mod; // delete any mod that carried over from previous call
								var data = response.data.result;
								if(obj[index]){
									var name=data.name?data.name:' ';
									if(data.level){
										name = data.level;
									}					
									if(req.params.tbl === '217'){
										if(response.data.roll === 22){
											// a roll of 22 on this table requires rerolling without the cuMod and subtracting 1d3 from the roll
											// adding here, as storing that kind of variable in the table column would be too much
											req.params.mod = (Math.floor(Math.random() * 3)+1)*-1;
											noteLoop(req, obj, index, deferred);
											stop = true;
										} else if(response.data.roll === 45){
											// a roll of 45 on this table requires rerolling and adding 5 to the roll.
											req.params.mod = 5;
											noteLoop(req, obj, index, deferred);
											stop=true;
										} else {
											obj[index].push({name: name,roll:response.data.roll,desc:data.descrip});
										}
									} else {
										obj[index].push({name: name,roll:response.data.roll,desc:data.descrip});
									}

								} else {
									var name=data.name?data.name:' ';
									var ptu = (Math.floor(Math.random() * 6)+1)>4?2:1;
									obj[index] = [{name: name,roll:response.data.roll,desc:data.descrip,parent:ptu}];
								}
								if (data.tbl&&!stop) {
									var tArray = new Array();
									// when multiple tables are present, split the tables into an array
									var tables = data.tbl.split(',');
									tables.forEach(function(el){
										if(el.includes('[')){
											var regex = /(.*?)\[(.*?)\]/gi;
											var iChk = regex.exec(el);
											var count = 0;
											if(iChk[2].includes('d')){
												count = $scope.ShdFnc.dRoll(iChk[2]);
											} else {
												count = parseInt(iChk[2]);
											}
											for (var i=0;i<count;i++){
												tArray.push(iChk[1]);
											}	
										} else {
											tArray.push(el);
										}
									});
									tArray.forEach(function(el){
										if(el.includes('427')) {// Hobbies
											console.log(el,'Hobbies');
										} else if(el === '535a'){
											console.log(el,'Military');
											//getMilitary(data).then(function(data){
												
											//});
										} else if(el.includes('534')) {
											$scope.charInfo.parent.underworld.count++;
										} else {
											if(el.includes('103'))
												console.log(el)
											req.params.table = el;
											console.log('t'+el,daTa['t'+el])
											req.params.lowRoll = daTa['t'+el].lowRoll;

											req.params.highRoll = daTa['t'+el].highRoll;
											noteLoop(req, obj, index, deferred);
										}
									});
								} else {
									deferred.resolve();
								}

							});

							return deferred.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getEvents();
						}

                     }]
                };
            }
        ]);



