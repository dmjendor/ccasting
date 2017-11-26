window.angular.module('castingApp.services.CharData', [])
	.factory('CharData', ['$q', function($q) {
		'use strict';

		var sharedData = {
			debug: false,
			showRolls: false,
			generateFull: true,
			age: 0,
			cuMod: 0,
			solMod: 0,
			legitMod: 0,
			biMod: 0,
			tiMod: 0,
			imprisoned: 0,
			enslaved: 0,
			survival: null,
			legitimacy: {
				name: null,
				desc: null,
				roll: 0,
				tbl: null,
				lRoll: 0
			},
			traits: {
				lightCount: 0,
				darkCount: 0,
				neutralCount: 0,
				lightSide: [],
				darkSide: [],
				neutral: [],
				exotic: []
			},
			race: {
				name: null,
				desc: null,
				roll: 0,
				tbl: null
			},
			culture: {
				native: null,
				level: null,
				desc: null,
				roll: 0,
				tbl: null
			},
			parent: {
				status : {
					level: null,
					name: '',
					roll: 0
				},
				desc: null,
				roll: 0,
				tbl: null,
				land: {
					titleCount: 0,
					titles: [],
					holdPct: 0,
					size: 0,
					sizeDice: null
				},
				jobs: {
					head: [],
					parent1: [],
					parent2: []
				},
				military: {
					rank: {
						name: null,
						number: 0,
						roll: 0	
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: []
				},
				noteWorthy: []
			},
			military: {
					rank: {
						name: null,
						number: 0,
						roll: 0	
					},
					skills: {
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: []
				}
			
		};

		function ClearAll(){
			return {
				debug: false,
				showRolls: false,
				generateFull: true,
				age: 0,
				cuMod: 0,
				solMod: 0,
				legitMod: 0,
				biMod: 0,
				tiMod: 0,
				imprisoned: 0,
				enslaved: 0,
				survival: null,
				legitimacy: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null,
					lRoll: 0
				},
				traits: {
					lightCount: 0,
					darkCount: 0,
					neutralCount: 0,
					lightSide: [],
					darkSide: [],
					neutral: [],
					exotic: []
				},
				race: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				culture: {
					native: null,
					level: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				parent: {
					status : {
						level: null,
						name: '',
						roll: 0
					},
					desc: null,
					roll: 0,
					tbl: null,
					land: {
						titleCount: 0,
						titles: [],
						holdPct: 0,
						sizeDice: null,
						size: 0
					},
					jobs: {
						head: [],
						parent1: [],
						parent2: []
					},
					military: {
						rank: {
							name: null,
							number: 0,
							roll: 0	
						},
						serviceOf: {
							name: null,
							number: 0,
							roll: 0
						},
						events: []
					},
					noteWorthy: []
				},
				military: {
					rank: {
						name: null,
						number: 0,
						roll: 0	
					},
					skills: {
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: []
				}
				
			}
		}

		function ClearParent(){
			return {
				status : {
					level: null,
					name: '',
					roll: 0
				},
				desc: null,
				roll: 0,
				tbl: null,
				land: {
					titleCount: 0,
					titles: [],
					holdPct: 0,
					size: 0,
					sizeDice: null
				},
				jobs: {
					head: [],
					parent1: [],
					parent2: []
				},
				military: {
					rank: {
						name: null,
						number: 0,
						roll: 0	
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: []
				},
				noteWorthy: []
			}
		}

		function ClearJobs(){
			return {
				jobs: {
					head: [],
					parent1: [],
					parent2: []
				},
				military: ClearMilitary()
			}
		}

		function ClearMilitary(){
			return {
					rank: {
						name: null,
						number: 0,
						roll: 0	
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: []
			}
		}

		function ClearLand(){
			return {
				titleCount: 0,
				titles: [],
				holdPct: 0,
				holdResult: 0,
				sizeDice: null,
				size: 0
			}
		}

		function ClearCulture(){
			return {
				native: null,
				level: null,
				desc: null,
				roll: 0,
				tbl: null
			}
		}

		function ClearLegitimacy(){
			return {
				name: null,
				number: 0,
				roll: 0,
				tbl: null
			}
		}

		function ClearTraits(){
			return {
				lightCount: 0,
				darkCount: 0,
				neutralCount: 0,
				lightSide: [],
				darkSide: [],
				neutral: [],
				exotic: []
			}
		}

		return {
			Character:sharedData,
			initTraits: ClearTraits,
			initCulture: ClearCulture,
			initLand: ClearLand,
			initMilitary: ClearMilitary,
			initLegitimacy: ClearLegitimacy,
			initJobs: ClearJobs,
			initParent: ClearParent,
			initAll: ClearAll
		}
	}]);
