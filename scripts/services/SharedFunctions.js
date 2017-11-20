window.angular.module('castingApp.services.SharedFunctions', [])
	.factory('SharedFunctions', ['$q','$http', function($q,$http) {
		'use strict';

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
				httpRequest(req).then(function(response){
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

		var sArray = ["Unused","Primitive","Nomad","Barbarian","Civilized","Civilized-Decadent"];
		var kArray = ["420a","420a","421a","422a","423a", "423a","423a","423a"];

		function JobSelect(culture,mod) {
			var defObj = $q.defer();
			array_search(culture,sArray).then(function(sVal){
				var tVal = 0;
				if(mod){
					tVal = parseInt(sVal) + parseInt(mod);
				} else {
					tVal = parseInt(sVal);
				}
				defObj.resolve(kArray[tVal])
			});
			return defObj.promise;
		}

		function JobMod(culture) {
			var defObj = $q.defer();			
			array_search(culture,sArray).then(function(sVal){
				var roll = RollDice("1d6");
				var tVal = parseInt(sVal);	
				switch (roll){
					case 1:
					case 2:
					case 3:
						defObj.resolve(kArray[tVal]);
						break;
					case 4:
					case 5:
						defObj.resolve(kArray[tVal-1]);
						break;
					case 6:
						defObj.resolve(kArray[tVal+1]);
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
			getModJob:JobMod
		};
	}]);
