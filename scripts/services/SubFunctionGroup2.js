window.angular.module('castingApp.services.SubFunctionGroup2', [])
	.factory('SubGroup2', ['$q','$http','SharedData','SharedFunctions','CharData', function($q,$http,SharedData,SharedFunctions,CharData) {
		'use strict';

			var ShdFnc = SharedFunctions;
			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
			var daTa = SharedData.tables[0];
			var charInfo = CharData.Character;

			//Significant Events of Childhood and Adolesence
			var table215 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Special Events of Childhood
			var table216a = {
				roll() {
					var defObj = $q.defer();
					req.params = { table: 'CHILDHOOD_EVENTS', lowRoll: daTa.childhood_events.lowRoll, highRoll: daTa.childhood_events.highRoll};
					ShdFnc.tDive(req,charInfo.childhood.events).then(function(t4){
						defObj.resolve();
					});
					return defObj.promise;
				},
				reroll(index){
					var defObj = $q.defer();
					req.params = { table: '216a', lowRoll: daTa.t216a.lowRoll, highRoll: daTa.t216a.highRoll};
					ShdFnc.tDive(req,charInfo.childhood.events,index).then(function(t4){
						defObj.resolve();
					});
					return defObj.promise;
				},
				build() {
					return ;
				}
			}

			//Special Events of Adolescence
			var table216b = {
				roll() {
					var defObj = $q.defer();
					req.params = { table: '3', lowRoll: daTa.t3.lowRoll, highRoll: daTa.t3.highRoll};
					ShdFnc.tDive(req,charInfo.adolescence.events).then(function(t3){
						defObj.resolve();
					});
					return defObj.promise;
				},
				reroll(index){
					var defObj = $q.defer();
					req.params = { table: '216b', lowRoll: daTa.t216b.lowRoll, highRoll: daTa.t216b.highRoll};
					ShdFnc.tDive(req,charInfo.adolescence.events,index).then(function(t4){
						defObj.resolve();
					});
					return defObj.promise;
				},
				build() {
					return ;
				}
			}

			//Special Events of Adulthood
			var table217 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}



		return {
			Table215:table215,
			Table216a:table216a,
			Table216b:table216b,
			Table217:table217,

		}

	}]);
