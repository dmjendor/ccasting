'use strict';
window.angular.module('castingApp.components.survival', [])
        .directive('survivalInfo', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/survival-info/survival.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						

                     }]
                };
            }
        ]);



