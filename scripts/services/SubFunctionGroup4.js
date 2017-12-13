window.angular.module('castingApp.services.SubFunctionGroup4', [])
	.factory('SubGroup4', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Apprenticeships
			class table419 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Primitive Occupations
			class table420 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Nomad Occupations
			class table421 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Barbarian Occupations
			class table422 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Civilized Occupations
			class table423 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Crafts
			class table424 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Merchants
			class table425 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Occupation Performance
			class table426 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

			//Hobbies
			class table427 {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  }
			  // Method
			  build() {
				return ;
			  }
			}

		return {
			Table419:table419,
			Table420:table420,
			Table421:table421,
			Table422:table422,
			Table423:table423,
			Table424:table424,
			Table425:table425,
			Table426:table426,
			Table427:table427
		}

	}]);
