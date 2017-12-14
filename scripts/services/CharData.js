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
			family: {
				name: null,
				desc: null,
				roll: 0,
				tbl: null,
				siblings: []
			},
			birth: {
				order: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				time: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null	
				},
				place: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null	
				},
				events: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null,
					list: []

				}
			},
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
					titleDice: null,
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
				noteWorthy: {
					count: 0,
					items: []
				},
				underworld: {
					count: 0,
					events: []
				}
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
				family: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null,
					siblings: []
				},
				birth: {
					order: {
						name: null,
						desc: null,
						roll: 0,
						tbl: null
					},
					time: {
						name: null,
						desc: null,
						roll: 0,
						tbl: null	
					},
					place: {
						name: null,
						desc: null,
						roll: 0,
						tbl: null	
					},
					events: {
						name: null,
						desc: null,
						roll: 0,
						tbl: null,
						list: []
					}
				},
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
						titleDice: null,
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
					noteWorthy: {
						count: 0,
						items: []
					},
					underworld: {
						count: 0,
						events: []
					}
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
					titleDice: null,
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
				noteWorthy: [],
				underworld: {
					count: 0,
					events: []
				}
			}
		}

		function ClearJobs(){
			return {
					head: [],
					parent1: [],
					parent2: []
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
				titleDice: null,
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
				desc: null,
				roll: 0,
				tbl: null,
				lRoll: 0
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

		function ClearStatus(){
			return {
				level: null,
				name: '',
				roll: 0
			}
		}

		function ClearParentUnderworld(){
			return {
				count: 0,
				events: []
			}
		}

		function ClearFamily(){
			return {
				name: null,
				desc: null,
				roll: 0,
				tbl: null,
				siblings: []
			}
		}

		function ClearBirth(){
			return {
				order: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				time: null,
				place: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null	
				},
				events: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null,
					list: []

				}
			}
		}

		return {
			Character:sharedData,
			initTraits: ClearTraits,
			initCulture: ClearCulture,
			initStatus: ClearStatus,
			initLand: ClearLand,
			initMilitary: ClearMilitary,
			initLegitimacy: ClearLegitimacy,
			initJobs: ClearJobs,
			initParent: ClearParent,
			initParentUnderworld: ClearParentUnderworld,
			initFamily: ClearFamily,
			initAll: ClearAll
		}
	}]);
