window.angular.module('castingApp.directives.tableDive', [])
	.directive('tableDive', function(RecursionHelper) {
    return {
        restrict: "A",
        scope: {parent: '='},
        templateUrl: 'templates/tableDive.htm', 
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
                // Define your normal link function here.
                // Alternative: instead of passing a function,
                // you can also pass an object with 
                // a 'pre'- and 'post'-link function.
            });
        }
    };
  });