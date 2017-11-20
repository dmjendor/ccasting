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
			race: {
				name: '',
				desc: '',
				roll: 0
			},
			culture: {
				level: '',
				desc: '',
				roll: 0
			},
			parent: {
				level: '',
				desc: '',
				roll: 0,
				title: '',
				landTitles: '',
				landHoldings: '',
				landSize: 0,
				headHousehold: {
					name: '',
					desc: '',
					roll: 0,
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
				rank: ''
			}
		};

		return sharedData;
	}]);
