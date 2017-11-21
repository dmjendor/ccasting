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
				landTitles: '',
				landHoldings: '',
				landSize: 0,
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

		return sharedData;
	}]);
