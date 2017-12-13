window.angular.module('castingApp.services.SharedFunctions', [])
	.factory('SharedFunctions', ['$q','$http','SharedData','SubGroup1', function($q,$http,SharedData,SubGroup1) {
		'use strict';

		var daTa = SharedData.tables[0];
		var sub1 = SubGroup1;

		function array_search (needle, haystack, argStrict) { // eslint-disable-line camelcase
		  var defObj = $q.defer();
		  //  discuss at: http://locutus.io/php/array_search/
		  // original by: Kevin van Zonneveld (http://kvz.io)
		  //    input by: Brett Zamir (http://brett-zamir.me)
		  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
		  // bugfixed by: Reynier de la Rosa (http://scriptinside.blogspot.com.es/)
		  //        test: skip-all
		  //   example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'})
		  //   returns 1: 'surname'
		  //   example 2: array_search('3', {a: 3, b: 5, c: 7})
		  //   returns 2: 'a'
		  var strict = !!argStrict
		  var key = ''
		  if (typeof needle === 'object' && needle.exec) {
			// Duck-type for RegExp
			if (!strict) {
			  // Let's consider case sensitive searches as strict
			  var flags = 'i' + (needle.global ? 'g' : '') +
				(needle.multiline ? 'm' : '') +
				// sticky is FF only
				(needle.sticky ? 'y' : '')
			  needle = new RegExp(needle.source, flags)
			}
			for (key in haystack) {
			  if (haystack.hasOwnProperty(key)) {
				if (needle.test(haystack[key])) {
				  defObj.resolve(key);
				}
			  }
			}
			
		  }
		  for (key in haystack) {
			if (haystack.hasOwnProperty(key)) {
			  if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) { // eslint-disable-line eqeqeq
				defObj.resolve(key)
			  }
			}
		  }
		  if(!key){
			  defObj.reject();
		  }
		  return defObj.promise;
		}

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

//			var dex = dice.split('d');
//			var dTop = dex[1]*dex[0];
//			return Math.floor((Math.random() * dTop) + 1)
			const regex = /(\d*)(?:D)(\d*)([+*-])*((?:\d+|\([A-Z]*\)))*(?:\+(D\d*))?/gi;
			var diceArr = regex.exec(dice)
			var top = parseInt(diceArr[1])*parseInt(diceArr[2]);
			var bottom = parseInt(diceArr[1]);
			var mod = parseInt(diceArr[4]);
			var finalVal = 0;
			var roll = Math.floor(Math.random() * (top - bottom + 1)) + bottom;
			
			if(diceArr[4]){
				if(typeof mod === 'number'){
					switch(diceArr[3]){
						case '+':
							finalVal = roll+mod;
							break;
						case '-':
							finalVal = roll-mod;
							break;
						case '*':
							finalVal = roll*mod;
							break;
						case '/':
							finalVal = roll^mod;
							if(roll%mod!=0){
								finalVal += ' r'+roll%mod;
							}
							break;
					}
				} else {
					finalVal = roll;
				}			
			} else {
				finalVal = roll;
			}
			return finalVal;

		}

		function FunctionLoop(tNum,obj,deferred){
			if(!deferred) {
				deferred = $q.defer();
			}

			var tArray = new Array();
			var tables = tNum.split(',');
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
				var req = {	method: 'GET', url: 'getData.php', params: { table: el , lowRoll: daTa['t'+el].lowRoll, highRoll: daTa['t'+el].highRoll } };
				HttpReq(req).then(function(response){
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

		var cultureArray = ["Unused","Primitive","Nomad","Barbarian","Civilized","Civilized-Decadent"];
		var cultureTableArray = ["420a","420a","421a","422a","423a", "423a","423a","423a"];

		function JobSelect(culture) {
			var defObj = $q.defer();
			// search the culture array for the current culture level and return its index
			array_search(culture,cultureArray).then(function(sVal){
				//get the table value from the cultureTableArray using the index from the culture
				defObj.resolve(cultureTableArray[parseInt(sVal)])
			});
			return defObj.promise;
		}

		function JobMod(culture) {
			var defObj = $q.defer();			
			array_search(culture,cultureArray).then(function(sVal){
				var roll = RollDice("1d6");
				var tVal = parseInt(sVal);	
				switch (roll){
					case 1:
					case 2:
					case 3:
						defObj.resolve(cultureTableArray[tVal]);
						break;
					case 4:
					case 5:
						defObj.resolve(cultureTableArray[tVal-1]);
						break;
					case 6:
						defObj.resolve(cultureTableArray[tVal+1]);
						break;
					}
			});
			return defObj.promise;
		}



		return {
			httpRequest:HttpReq,
			fLoop:FunctionLoop,
			dRoll:RollDice,
			getJob:JobSelect,
			getModJob:JobMod,
			Sub1: sub1
		};
	}]);
