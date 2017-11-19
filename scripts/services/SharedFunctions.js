window.angular.module('castingApp.services.SharedFunctions', [])
	.factory('SharedFunctions', ['$q','$http', function($q,$http) {
		'use strict';

		function HttpReq(req) {
			var defObj = $q.defer();
			$http(req).then(function(response){
				defObj.resolve(response);
			},function(error){
				console.log(error);
				defObj.reject(error);
			})
			return defObj.promise;
		}

		function RollDice(dice) {

			var dex = dice.split('d');
			var dTop = dex[1]*dex[0];
			return Math.floor((Math.random() * dTop) + 1)
		}

		function FunctionLoop(tNum,obj,deferred){
			if(!deferred) {
				deferred = $q.defer();
			}

			var tArray = new Array();
			var tables = tNum.split(',');
			tables.forEach(function(el){
			var tab = el.split(':');
				if(tab[1]){
					for (var i=0;i<tab[1];i++)
					{
						tArray.push(tab[0]);
					}
				} else {
					tArray.push(tab[0]);
				}
			});
			
			tArray.forEach(function(el){
				var req = {
				 method: 'POST',
				 url: 'getResults.php',
				 data: { table: el }
				}
				ShdFnc.httpRequest(req).then(function(response){
					var data = response.data.result;
					if (data.tbl != '') {
						obj.push({name:data.name,desc:data.descrip,roll:response.data.roll});
						FunctionLoop(data.tbl, obj, deferred);
					} else {
						obj.push({name:data.name,desc:data.descrip,roll:response.data.roll});
						deferred.resolve();
					}
				});	
			});

			return deferred.promise;
		}

		function JobSelect(culture,mod) {
			var sArray = array('1' => "Primitive",'2' => "Nomad",'3' => "Barbarian",'4' => "Civilized",'5' => "Civilized-Decadent");
			var kArray = array( "0" => "420a","1" => "420a","2" => "421a","3" => "422a","4" => "423a","5" => "423a","6" => "423a","7" => "423a");
			var sVal =  array_search(culture,sArray);
			var tVal = sVal + mod;
			return kArray[tVal];
		}

		function JobMod(culture) {
			var sArray = array('1' => "Primitive",'2' => "Nomad",'3' => "Barbarian",'4' => "Civilized",'5' => "Civilized-Decadent");
			var kArray = array( "0" => "420a","1" => "420a","2" => "421a","3" => "422a","4" => "423a","5" => "423a","6" => "423a","7" => "423a");
			var roll = dRoll("1d6");
			var sVal =  array_search(culture,sArray);
			var tVal = 0;
			var table = '';

			switch (roll){
				case 1:
					table = kArray[sVal];
					break;
				case 2:
					table = kArray[sVal];
					break;
				case 3:
					table = kArray[sVal];
					break;
				case 4:
				case 5:
					tVal = sVal-1;
					table = kArray[tVal];
					break;
				case 6:
					tVal = sVal+1;
					table = kArray[tVal];
					break;
				}
			return $table;
		}

		return {
			httpRequest:HttpReq,
			fLoop:FunctionLoop,
			dRoll:RollDice,
			getJob:JobSelect,
			getModJob:JobMod
		};
	}]);
