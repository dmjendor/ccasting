window.angular.module('castingApp.services.SubFunctionGroup6', [])
	.factory('SubGroup6', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Lightside Traits
			class table647 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Darkside Traits
			class table648 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}


			//Exotic Personality Features
			class table649 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}



		return {
			Table647:table647,
			Table648:table648,
			Table649:table649
		}

	}]);
