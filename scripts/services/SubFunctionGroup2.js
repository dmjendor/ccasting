window.angular.module('castingApp.services.SubFunctionGroup2', [])
	.factory('SubGroup2', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Significant Events of Childhood and Adolesence
			class table215 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Special Events of Childhood and Adolescence
			class table216 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Special Events of Adulthood
			class table217 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
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
