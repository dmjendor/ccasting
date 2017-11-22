window.angular.module('castingApp.controllers.base', [])
    .controller('baseController', ['$scope', '$rootScope', '$q', '$http', 'CharData', 'SharedFunctions',
        function($scope,$rootScope,$q,$http,CharData,ShdFnc){
            'use strict';

			$scope.charInfo = CharData.Character;



//		$pNoteworthy = t114b();			

			





			$scope.charInfoacterWizard = function(){

			}
    }
  ]);
