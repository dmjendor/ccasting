window.angular.module('castingApp.services.SharedFunctions', [])
	.factory('SharedFunctions', ['$q','$http','SharedData','CharData', 
	function($q,$http,SharedData,CharData) {
		'use strict';

		var daTa = SharedData.tables[0];
		

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

		function ordinal_suffix_of(i) {
			var j = i % 10,
				k = i % 100;
			if (j == 1 && k != 11) {
				return i + "st";
			}
			if (j == 2 && k != 12) {
				return i + "nd";
			}
			if (j == 3 && k != 13) {
				return i + "rd";
			}
			return i + "th";
		}

		function RollDice(dice) {

//			var dex = dice.split('d');
//			var dTop = dex[1]*dex[0];
//			return Math.floor((Math.random() * dTop) + 1)
			const regex = /(\d*)(?:D)(\d*)([+*-])*((?:\d+|\([A-Z]*\)))*(?:\+(D\d*))?/gi;
			var diceArr = regex.exec(dice)
			console.log(diceArr)
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
						deferred.resolve(response);
					}
				});	
			});

			return deferred.promise;
		}


		function TableDive2(req,obj,extend,index){



		}

		// Function designed to handle diving into nested tables
		function TableDive(req,obj,extend,index,deferred,parent){
			if(!deferred) {
				//if the deferred promise does not exist, define it.
				deferred = $q.defer();
			}
			// if the extend variable does not exist, define it.
			var extend = extend?extend:false;

			var parent = parent?parent:0;

			HttpReq(req).then(function(response){
				var data = response.data.result;
				index = index?index:0;
				insertData(obj,index,response,extend,parent).then(function(){
					// reset index after data insert
					// if the response contains a table additional processing is required.
					if (data.tbl) {
						parent = index;
						index = -1;
						var tArray = new Array();
						// when multiple tables are present, split the tables into an array
						var tables = data.tbl.split(',');
						tables.forEach(function(el){
							// if the table indicates it should be repeated
							if(el.includes('[')){
								var regex = /(.*?)\[(.*?)\]/gi;
								var iChk = regex.exec(el);
								var count = 0;
								//if the repeater is a dice roll roll the dice otherwise set count to indicated number
								if(iChk[1].includes('d')){
									count = ShdFnc.dRoll(iChk[2]);
								} else {
									count = parseInt(iChk[2]);
								}
								//add the table to the array list the number of times indicated
								for (var i=0;i<count;i++){
										tArray.push(iChk[1]);
								}
							} else {
								tArray.push(el);
							}
						});
						// Re-run the function for each table entry
						tArray.forEach(function(el){
							var chainObj = $q.when();
							//check the whether the table being used increments results or replaces them
							index = index+1;
							var request = {	method: 'GET', url: 'getData.php', params: { table: el , lowRoll: daTa['t'+el].lowRoll, highRoll: daTa['t'+el].highRoll } };

							if(daTa['t'+el].modifier){
								request.params.mod = eval(daTa['t'+el].modifier);
							}
							if(Array.isArray(obj)){
								TableDive(request, obj[parent].items, extend, index, deferred,parent);
							} else {
								TableDive(request, obj.items, extend, index, deferred,parent);
							}
						});
					} else {
						deferred.resolve(response);
					}
				});
			});

			return deferred.promise;
		}
		
		// Add data retrieved from nested tables, into the associated objects
		function insertData(obj,index,response,extend,parent){
			var defObj = $q.defer();
			var data = response.data.result;
			if(Array.isArray(obj)){
				obj.push({
					 name: data.name,
					 desc:data.descrip,
					 roll:response.data.roll,
					 tbl: data.tbl,
					 parent: parent,
					 items:[]
				 });
			} else {
				obj.items.push({
					 name: data.name,
					 desc:data.descrip,
					 roll:response.data.roll,
					 tbl: data.tbl,
					 parent: parent,
					 items:[]
				 });
			}
			defObj.resolve();

			return defObj.promise;
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
			ordinalSuffix:ordinal_suffix_of,
			tDive:TableDive
		};
	}]);
