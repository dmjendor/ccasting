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
			survival: '',
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
				name: '',
				desc: '',
				roll: 0,
				tbl: ''
			},
			culture: {
				native: '',
				level: '',
				desc: '',
				roll: 0,
				tbl: ''
			},
			parent: {
				level: '',
				desc: '',
				roll: 0,
				tbl: '',
				title: '',
				land: {
					titleCount: 0,
					titles: [],
					holdPct: 0,
					holdResult: 0,
					size: 0
				},
				headHousehold: {
					name: '',
					desc: '',
					roll: 0,
					tbl: '',
					jobs: []
				},
				parent1: {
					jobs: []
				},
				parent2: {
					jobs: []
				},
				noteWorthy: []
			},
			military: {
				rankNum: '',
				name: ''
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
				survival: '',
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
					name: '',
					desc: '',
					roll: 0,
					tbl: ''
				},
				culture: {
					native: '',
					level: '',
					desc: '',
					roll: 0,
					tbl: ''
				},
				parent: {
					level: '',
					desc: '',
					roll: 0,
					tbl: '',
					title: '',
					land: {
						titleCount: 0,
						titles: [],
						holdPct: 0,
						holdResult: 0,
						sizeDice: '',
						size: 0
					},
					headHousehold: {
						name: '',
						desc: '',
						roll: 0,
						tbl: '',
						jobs: []
					},
					parent1: {
						jobs: []
					},
					parent2: {
						jobs: []
					},
					military: {
						rank: {
							name: '',
							number: 0,
							roll: 0	
						},
						serviceOf: {
							name: '',
							number: 0,
							roll: 0
						},
						events: []
					},
					noteWorthy: []
				},
				military: {
					rank: {
						name: '',
						number: 0,
						roll: 0	
					},
					skills: {
					},
					serviceOf: {
						name: '',
						number: 0,
						roll: 0
					},
					events: []
				}
				
			}
		}

		function ClearParent(){
			return {
				level: '',
				desc: '',
				roll: 0,
				tbl: '',
				title: '',
				land: {
					titleCnt: 0,
					titles: [],
					holdPct: 0,
					holdResult: 0,
					size: 0
				},
				headHousehold: {
					name: '',
					desc: '',
					roll: 0,
					tbl: '',
					jobs: []
				},
				parent1: {
					jobs: []
				},
				parent2: {
					jobs: []
				},
				noteWorthy: []
			}
		}

		function ClearJobs(){
			return {
				headHousehold : {
					name: '',
					desc: '',
					roll: 0,
					tbl: '',
					jobs: []
				},
				parent1 : {
					jobs: []
				},
				parent2 : {
					jobs: []
				}
			}
		}

		function ClearMilitary(){
			 return {
				rankNum: '',
				name: ''
			}
		}

		function ClearLand(){
			return {
				titleCnt: 0,
				titles: [],
				holdPct: 0,
				holdResult: 0,
				sizeDice: '',
				size: 0
			}
		}

		function ClearCulture(){
			return {
				native: '',
				level: '',
				desc: '',
				roll: 0,
				tbl: ''
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
			initJobs: ClearJobs,
			initParent: ClearParent,
			initAll: ClearAll
		}
	}]);
