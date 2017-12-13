window.angular.module('castingApp.services.SubFunctionGroup7', [])
	.factory('SubGroup7', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Others
			var table750 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Nonhumans
			var table751 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Government Officials
			var table752 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Relatives
			var table753 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Guardians
			var table754 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Criminals
			var table755 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Monsters
			var table756 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Adventurers
			var table757 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Nobles
			var table758 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Unusual Pets
			var table759 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Unusual Pet Abilities
			var table760 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Companions
			var table761 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Rivals
			var table762 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}


		return {
			Table750:table750,
			Table751:table751,
			Table752:table752,
			Table753:table753,
			Table754:table754,
			Table755:table755,
			Table756:table756,
			Table757:table757,
			Table758:table758,
			Table759:table759,
			Table760:table760,
			Table761:table761,
			Table762:table762
		}

	}]);
