window.angular.module('castingApp.services.SubFunctionGroup1', [])
	.factory('SubGroup1', ['$q', function($q) {
		'use strict';

			//Character Race
			class table101 {

				roll() {
					var defObj = $q.defer();
					$http(req).then(function(response){
							var raceData = response.data.result;
							if(raceData.tbl != ''){
								req.params = { table: '101a', lowRoll: daTa.t101a.lowRoll, highRoll: daTa.t101a.highRoll };
								
								$http(req).then(function(response){
									defObj.resolve(response);
								});
							} else {
								defObj.resolve(response);
							}
						});
					return defObj.promise;
				}
				  // Method
				build() {
					return ;
				}
			}


			//Cultural Background
			class table102 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Social Status
			class table103 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}
			
			//Legitimacy of Birth
			class table104 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Reasons for Illegitimate Birth
			class table105 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//The Family
			class table106 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Siblings
			class table107 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Birth Order
			class table108 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Time of Birth
			class table109 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Place of Birth
			class table110 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Exotic Birth Locations
			class table111 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Unusual Births
			class table112 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Unusual Birth Circumstances
			class table113 {

			  roll() {
				return ;
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Parents & NPCs
			class table114 {

			  roll() {
				return ;
			  }
			  // Method
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
