'use strict';
window.angular.module('castingApp.components.parent.notes', [])
        .directive('parentNotes', [
            function () {
                return{
                    restrict: 'E',
                    scope: true,
                    replace: true,
                    templateUrl: 'components/parent-info/parent-notes/notes.htm',
                    link: function ($scope, elem, attrs) {},
                    controller: ['$scope', '$q', 'CharData', 'SharedFunctions', function ($scope, $q, CharData, ShdFnc) {

						$scope.charInfo = CharData.Character;

						$scope.getNotes = function(){
							var defObj = $q.defer();
							defObj.resolve();

							return defObj.promise;
						}

						if($scope.charInfo.generateFull){
							$scope.getNotes();
						}

                     }]
                };
            }
        ]);



