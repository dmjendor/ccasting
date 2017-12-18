window.angular.module('castingApp.directives.tableDive', [])
	.directive('tableDive', function(RecursionHelper) {
    return {
        restrict: "A",
        scope: {parent: '='},
        template: 
			'<ul  class="list-group">' + 
                '<li class="list-group-item" ng-repeat="child in parent.items">' + 
					'<span class="badge" ng-show="charInfo.showRolls">{{child.roll}}</span> {{child.name}} - {{child.desc}}</li>' +
                    '<div tree-dive parent="child"></tree>' +
                '</li>' +
            '</ul>',
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