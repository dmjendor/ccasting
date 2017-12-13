window.angular.module('castingApp.services.FunctionGroup', [])
	.factory('FunctionGroup', ['SubGroup1','SubGroup2','SubGroup3','SubGroup4','SubGroup4','SubGroup5','SubGroup6','SubGroup7','SubGroup8','SubGroup9', 
		function(SubGroup1,SubGroup2,SubGroup3,SubGroup4,SubGroup5,SubGroup6,SubGroup7,SubGroup8,SubGroup9) {
		'use strict';


		return {
			Sub1:SubGroup1,
			Sub2:SubGroup2,
			Sub3:SubGroup3,
			Sub4:SubGroup4,
			Sub5:SubGroup5,
			Sub6:SubGroup6,
			Sub7:SubGroup7,
			Sub8:SubGroup8,
			Sub9:SubGroup9
		}

	}]);
