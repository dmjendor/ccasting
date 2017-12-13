window.angular.module('castingApp.services.SubFunctionGroup5', [])
	.factory('SubGroup5', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Tragedies
			var table528 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Something Wonderful
			var table529 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}


			//Elven Events
			var table530 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Dwarvish Events
			var table531 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Halfling Events
			var table532 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Monster Events
			var table533 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Underworld Experience
			var table534 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Military Experience
			var table535 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Noncombat Duty
			var table536 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Special Services
			var table537 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Military Rank
			var table538 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Enslaved
			var table539 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Imprisoned
			var table540 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Religious Experience
			var table541 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Ah Love!
			var table542 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//In the Service of
			var table543 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Exotic Events
			var table544 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Death Situations
			var table545 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Death of a Parent or Guardian
			var table546 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}


		return {
			Table528:table528,
			Table529:table529,
			Table530:table530,
			Table531:table531,
			Table532:table532,
			Table533:table533,
			Table534:table534,
			Table535:table535,
			Table536:table536,
			Table537:table537,
			Table538:table538,
			Table539:table539,
			Table540:table540,
			Table541:table541,
			Table542:table542,
			Table543:table543,
			Table544:table544,
			Table545:table545,
			Table546:table546
		}

	}]);
