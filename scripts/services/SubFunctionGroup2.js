window.angular.module('castingApp.services.SubFunctionGroup2', [])
	.factory('SubGroup2', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Significant Events of Childhood and Adolesence
			var table215 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Special Events of Childhood and Adolescence
			var table216 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
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
			Table216:table216,
			Table217:table217,

		}

	}]);
