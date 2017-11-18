window.angular.module('castingApp.services.SharedFunctions', [])
	.factory('SharedFunctions', ['$q','$http', function($q,$http) {
		'use strict';

		function httpReq(req) {
			var defObj = $q.defer();
			$http(req).then(function(response){
				defObj.resolve(response);
			},function(error){
				console.log(error);
				defObj.reject(error);
			})
			return defObj.promise;
		}

		return {
			httpRequest:httpReq
		};
	}]);
