window.angular.module('castingApp.services.SubFunctionGroup3', [])
	.factory('SubGroup3', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Alignment and Attitude
			var table318 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}


		return {
			Table318:table318
		}

	}]);
