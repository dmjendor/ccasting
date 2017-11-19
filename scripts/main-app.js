

window.$jq = jQuery.noConflict();
window.$ = jQuery.noConflict();

//castingApp module definition and its dependencies
window.castingApp = angular.module('castingApp', [
//	'ngRoute'
	'castingApp.services',
	'castingApp.controllers',
	'castingApp.components'
//  'castingApp.directives',
//  'castingApp.filters',
//  'castingApp.models'

  
], null);


/**
 * @ngdoc overview
 * @name castingApp.services
 * @description
 * Namespace containing all Service Objects in the castingApp module
 **/
window.angular.module('castingApp.services', [
  'castingApp.services.CharData',
  'castingApp.services.SharedFunctions',
  'castingApp.services.ResourceNotification'
], null);


/**
 * @ngdoc overview
 * @name castingApp.controllers
 * @description
 * Namespace containing all Controller Objects in the castingApp module
 **/
window.angular.module('castingApp.controllers', [
  'castingApp.controllers.base'
], null);

//castingApp.directives module definition and its dependencies
//window.angular.module('castingApp.directives', [
//  'castingApp.directives.appLoad',
//], null);

//castingApp.filters module definition and its dependencies
//window.angular.module('castingApp.filters', [
//  'castingApp.filters.cleanDate',
//], null);

/**
 * @ngdoc overview
 * @name castingApp.models
 * @description
 * Namespace containing all Model Objects in the castingApp module
 **/
//window.angular.module('castingApp.models', [
//  'castingApp.models.BaseModel',
//], null);


window.angular.module('castingApp.components', [
  'castingApp.components.race',
  'castingApp.components.culture',
  'castingApp.components.parent',
  'castingApp.components.parent.status',
  'castingApp.components.parent.title'

//  'castingApp.components.bioModal_ctrl',
], null);

window.castingApp.config([ '$httpProvider',
  function ( $httpProvider ) {
    'use strict';
 var interceptor = ['$q', '$window', '$location', '$injector', function($q, $window, $location, $injector) {

        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            response: function (response) {
                return response || $q.when(response);
            },

            // Revoke client authentication if 401 is received

            responseError: function(rejection) {
                console.log(rejection);
                // Dynamically get the service since they can't be injected into config
                var AuthenticationService = $injector.get('AuthenticationService');

                if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isLogged)) {
                    delete $window.sessionStorage.token;
                    AuthenticationService.isLogged = false;
                    $location.path("/login");
                }

                return $q.reject(rejection);
            }
        };
    }];

    $httpProvider.interceptors.push(interceptor);
        //$httpProvider.responseInterceptors.push('HttpInterceptor');
    $httpProvider.defaults.headers.common = {
      'Accept': 'application/json, text/plain, version=2'
    };
    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/json; charset=UTF-8'
    };
    $httpProvider.defaults.headers.put = {
      'Content-Type': 'application/json; charset=UTF-8'
    };
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/json; charset=UTF-8'
    };


  //suppress promise warning from 1.6 update
//    $qProvider.errorOnUnhandledRejections(false);
//
//    $locationProvider.html5Mode(false);
//    $locationProvider.hashPrefix('');
//    if( navigator !== void(0) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//        window.localStorage.setItem('mobileDevice', true);
//        if(/iPhone|iPod/i.test(navigator.userAgent)){
//            window.localStorage.setItem('iosDevice', true);
//        } else {
//            window.localStorage.setItem('iosDevice', false);
//        }
//    } else {
//        window.localStorage.setItem('mobileDevice', false);
//        window.localStorage.setItem('iosDevice', false);
//    }
//
//    $stateProvider
//      .state({
//        name:'logout',
//        url: null,
//        controller:[$scope,function($scope) {
//			}]
//     })
//      .state({
//        name:'register',
//        url: '/register',
//        templateUrl: function(){
//          return viewsPath + 'nav-landing-partial.htm';
//        },
//        controller: 'navLandingCtrl'
//      })   
//      .state('store-ops.pm', {
//        url: '/pm',
//        templateUrl: function () {
//          return  'components/store-ops/price-manager/index.htm';
//        }
//      })    
//      .state('employeeManagement.lookup', {
//        url: '/lookup',
//        params:{store:void(0), priceLevel:void(0)},
//        templateUrl: 'components/store-ops/employees-management/children/lookup/index.htm'
//      });

//
}]);
//]).run(['$rootScope',
//  function ($rootScope){
//    'use strict';
//
//
//
//  }
//]);


