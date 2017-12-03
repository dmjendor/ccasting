'use strict';
window.angular.module('castingApp.components.parent', [])
        .directive('parentInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', 'SharedData', function ($scope, $q, CharData, SharedFunctions, SharedData) {

						$scope.charInfo = CharData.Character;
						$scope.ShdFnc = SharedFunctions
						var daTa = SharedData.tables[0];

						 

						var req = {	method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };
						var req2 = { method: 'GET', url: 'getData.php', params: { table: '' , lowRoll: 1, highRoll: 1 } };

					

                     }]
                };
            }
        ]);



