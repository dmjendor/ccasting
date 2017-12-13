window.angular.module('castingApp.services.SubFunctionGroup8', [])
	.factory('SubGroup8', ['$q','$http', function($q,$http) {
		'use strict';

			var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

			//Gifts & Legacies
			var table863 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Deities
			var table864 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Colors
			var table865 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Birthmarks
			var table866 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Body Locations
			var table867 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Curses
			var table868 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Blessings
			var table869 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Serious Wounds
			var table870 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Special Titles for Nobility
			var table871 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Relations to the Ruler of the Land
			var table872 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Psychic Abilities
			var table873 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Physical Afflictions
			var table874 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Crimes
			var table875 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Unusual Skills
			var table876 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}

			//Military Skills
			var table877 = {

			  roll() {
				return (Math.floor(Math.random() * 100)+1);
			  },
			  build() {
				return ;
			  }
			}


		return {
			Table863:table863,
			Table864:table864,
			Table865:table865,
			Table866:table866,
			Table867:table867,
			Table868:table868,
			Table869:table869,
			Table870:table870,
			Table871:table871,
			Table872:table872,
			Table873:table873,
			Table874:table874,
			Table875:table875,
			Table876:table876,
			Table877:table877
		}

	}]);
