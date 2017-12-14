window.angular.module('castingApp.services.SubFunctionGroup1', [])
	.factory('SubGroup1', ['$q','$http','SharedData','SharedFunctions','CharData', function($q,$http,SharedData,SharedFunctions,CharData) {
		'use strict';

			var ShdFnc = SharedFunctions;
			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
			var daTa = SharedData.tables[0];
			var charInfo = CharData.Character;
			//Character Race
			var table101 = {
			
				roll:function() {
					var defObj = $q.defer();
					req.params = { table: '101', lowRoll: daTa.t101.lowRoll, highRoll: daTa.t101.highRoll };
					$http(req).then(function(t101){
						if(t101.data.result.tbl != ''){
							req.params = { table: '101a', lowRoll: daTa.t101a.lowRoll, highRoll: daTa.t101a.highRoll };
							
							$http(req).then(function(t101){
								charInfo.race.name = t101.data.result.name;
								charInfo.race.desc = t101.data.result.descrip;
								charInfo.race.roll = t101.data.roll;
								charInfo.race.tbl = t101.data.result.tbl;		
								defObj.resolve();
							});
						} else {
							charInfo.race.name = t101.data.result.name;
							charInfo.race.desc = t101.data.result.descrip;
							charInfo.race.roll = t101.data.roll;
							charInfo.race.tbl = t101.data.result.tbl;
							defObj.resolve();
						}
					});
					return defObj.promise;
				},

				build() {
					return ;
				}
			}


			//Cultural Background
			var table102 = {
				roll:function() {
					var defObj = $q.defer();
					req.params = { table: '102', lowRoll: daTa.t102.lowRoll, highRoll: daTa.t102.highRoll };
					$http(req).then(function(response){
						charInfo.culture.native = t101.data.result.native;
						charInfo.culture.level = t101.data.result.level;
						charInfo.culture.desc = t101.data.result.descrip;
						charInfo.culture.roll = t101.data.roll;
						charInfo.culture.tbl = t101.data.result.tbl;	
					});
					return defObj.promise;
				},

				build() {
					return ;
				}
			}

			//Social Status
			var table103 = {
			
				roll:function() {
					var defObj = $q.defer();
					req.params = { table: '103', lowRoll: daTa.t103.lowRoll, highRoll: daTa.t103.highRoll };
					$http(req).then(function(response){
						defObj.resolve(response);
					});
					return defObj.promise;
				},

				build() {
					return ;
				}
			}
			
			//Legitimacy of Birth
			var table104 = {
				
				roll:function() {
					var defObj = $q.defer();
					//Roll legitimacy dice
					charInfo.legitimacy.lRoll = (Math.floor(Math.random() * daTa.t104.highRoll)+1);
					//If you are from a primitive culture and rolled a 20 you are automatically illegitimate
					if((charInfo.culture.level==='Primitive')&&(charInfo.legitimacy.lRoll === 20)){
						charInfo.legitMod = Math.floor((Math.random() * 4) + 1);
					//Otherwise if your cuMod + your legitimacy roll are 19+ you are illegitimate
					} else if((charInfo.cuMod+charInfo.legitimacy.lRoll)>18){
						charInfo.legitMod = Math.floor((Math.random() * 4) + 1);
					}
					// if there was a legit mod before, remove it.
					charInfo.solMod -= charInfo.legitMod;

					if(charInfo.legitMod){
						//if you are illegitimate and have a positive solMod, reduce your solMod by the legitMod
						if(charInfo.solMod>0){
							charInfo.solMod += charInfo.legitMod;
						}
						table105.roll().then(function(){
							defObj.resolve();
						});
					} else {
						table106.roll().then(function(){
							
						});
					}

					return defObj.promise;

				  },
				  build() {
					return false;
				  }
			}

			//Reasons for Illegitimate Birth
			var table105 = {

			  roll:function() {
					var defObj = $q.defer();
					req.params = { table: '105', lowRoll: daTa.t105.lowRoll, highRoll: daTa.t105.highRoll, mod: daTa.t105.modifier };
					$http(req).then(function(t105){
						charInfo.legitimacy.name = t105.data.result.name;
						charInfo.legitimacy.desc = t105.data.result.descrip;
						charInfo.legitimacy.roll = t105.data.roll;
						defObj.resolve();
					});
					return defObj.promise;
				},

				build() {
					return ;
				}
			}

			//The Family
			var table106  = {

			  roll() {
					var defObj = $q.defer();
					req.params = { table: '106', lowRoll: daTa.t106.lowRoll, highRoll: daTa.t106.highRoll, mod: daTa.t106.modifier };
					$http(req).then(function(t106){
						if(t106.data.roll === 20){
							var guardian = Math.floor((Math.random() * 20) + 1);
						} else {
							charInfo.family.name = t106.data.result.name;
							charInfo.family.desc = t106.data.result.descrip;
							charInfo.family.roll = t106.data.roll;
							table107.roll().then(function(){
								table108.roll().then(function(){
									defObj.resolve();
								});
							});
						}

					});
					return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Siblings
			var table107 = {

			  roll() {
					var defObj = $q.defer();
					req.params = { table: '107', lowRoll: daTa.t107.lowRoll, highRoll: daTa.t107.highRoll, mod: daTa.t107.modifier};
					$http(req).then(function(t107){
						var sibCount = ShdFnc.dRoll(t107.data.result.name);
						if(t107.data.roll!=='20'){
							for (var i=0;i<sibCount ;i++ ){
								var gender = (Math.floor((Math.random() * 20) + 1))<10?'Brother':'Sister';
								charInfo.family.siblings.push({'gender':gender});
							}
						} else {
							daTa.t107.modifier = sibCount;
							table107.roll();
						}

					});
					return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Birth Order
			var table108 = {

			  roll() {
				var defObj = $q.defer();
				req.params = { table: '108', lowRoll: daTa.t108.lowRoll, highRoll: daTa.t108.highRoll};
				$http(req).then(function(t108){
					charInfo.birth.order.name = t108.data.result.name;
					charInfo.birth.order.desc = t108.data.result.descrip;
					charInfo.birth.order.roll = t108.data.roll;
					defObj.resolve();
				});
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Time of Birth
			var table109 = {

			  roll() {
				var defObj = $q.defer();
				var tob = ShdFnc.dRoll("1d12");
				var pth = ShdFnc.ordinalSuffix(tob);
				var tobh = ShdFnc.dRoll("1d12");
				var tobm = ShdFnc.dRoll("1d59");
				var tobmp = sprintf("%02s", tobm);
				var tobAPm = ShdFnc.dRoll("1d2");
				var apm = "PM";
				if(tobAPm === "1"){ 
					apm = "AM"; 
				}
				charInfo.birth.time = "Born in the "+pth+" month, at "+tobh+":"+tobmp+apm;

				
				
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Place of Birth
			var table110 = {

			  roll() {
				var defObj = $q.defer();
				req.params = { table: '110', lowRoll: daTa.t110.lowRoll, highRoll: daTa.t110.highRoll};
				ShdFnc.tDive(req,true).then(function(t110){
					charInfo.biMod = t110.data.result.biMod;
					defObj.resolve();
				});
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Exotic Birth Locations
			var table111 = {

			  roll() {
				var defObj = $q.defer();
				req.params = { table: '111', lowRoll: daTa.t111.lowRoll, highRoll: daTa.t111.highRoll};
				ShdFnc.tDive(req,true).then(function(t110){
					defObj.resolve();
				});
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Unusual Births
			var table112 = {

			  roll() {
				var defObj = $q.defer();
				req.params = { table: '112', lowRoll: daTa.t112.lowRoll, highRoll: daTa.t112.highRoll,mod: daTa.t112.modifier};
				ShdFnc.tDive(req,true).then(function(t112){
					defObj.resolve();
				});
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Unusual Birth Circumstances
			var table113 = {

			  roll(index) {
				var defObj = $q.defer();
				req.params = { table: '113', lowRoll: daTa.t113.lowRoll, highRoll: daTa.t113.highRoll};
				ShdFnc.tDive(req,true,index).then(function(t113){
					defObj.resolve();
				});
				return defObj.promise;
			  },

			  build() {
				return ;
			  }
			}

			//Parents & NPCs
			var table114 = {

			  roll() {
				return ;
			  },

			  build() {
				return ;
			  }
			}

		return {
			Table101:table101,
			Table102:table102,
			Table103:table103,
			Table104:table104,
			Table105:table105,
			Table106:table106,
			Table107:table107,
			Table108:table108,
			Table109:table109,
			Table110:table110,
			Table111:table111,
			Table112:table112,
			Table113:table113,
			Table114:table114
		}

	}]);
