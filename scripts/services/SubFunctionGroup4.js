window.angular.module('castingApp.services.SubFunctionGroup4', [])
	.factory('SubGroup4', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Apprenticeships
			var table419 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Primitive Occupations
			var table420 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Nomad Occupations
			var table421 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Barbarian Occupations
			var table422 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Civilized Occupations
			var table423 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Crafts
			var table424 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Merchants
			var table425 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Occupation Performance
			var table426 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Hobbies
			var table427 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
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
