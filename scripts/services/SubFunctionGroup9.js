window.angular.module('castingApp.services.SubFunctionGroup9', [])
	.factory('SubGroup9', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//GM's Specials
			class table978 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}


		return {
			Table978:table978
		}

	}]);
