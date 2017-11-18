/**
 * @ngdoc service
 * @name castingApp.services.ResourceNotificationService
 * @description
 * Used to display toast notifications on the screen. Each notification may be dismissed individually, regardless of the order in which it appears.<br />
 * # Proper Usage Formatting #
 ```js
 prismApp.controller('myController', ['$scope', 'ResourceNotificationService',
 function($scope, ResourceNotificationService){

}]);
 ```
 */
window.angular.module('castingApp.services.ResourceNotification', [])
	.factory('ResourceNotification', ['$q','Notification','$translate',function($q,Notification,$translate) {
		'use strict';

		var resourceNotificationService = {
      /**
       * @ngdoc method
       * @name showSuccessfulMessage
       * @methodOf castingApp.services.ResourceNotificationService
       * @description
       *
       * This will generate a toast message in the bottom right corner of the screen using the success color scheme<br />
       * # Usage Example #
       * ```js
       ResourceNotificationService.showSuccessfulMessage('Header','Text');
       ```
       *
       * @param {String} title - The text to be displayed in the confirmation dialog (required.)
       * @param {String} message - The header text to be displayed in the confirmation dialog (required.)
       * @param {Integer} delay - Sets whether a backdrop is to be used with the confirmation dialog (optional) (defaults to true.)
       * @param {Boolean} forceRead - Any additional CSS classes to be added to the confirmation dialog. Each class must be separated by a space (optional.)
       *
       *
       **/
			showSuccessfulMessage:function(title,message,delay,forceRead){
				forceRead = (forceRead !== void(0)) ? forceRead : false;
				delay = (delay !== void(0)) ? delay : 10000;
				Notification.success({
					delegateRemove: forceRead,
					delay:delay,
					title:title,
					message:message
				});
			},
      /**
       * @ngdoc method
       * @name showError
       * @methodOf castingApp.services.ResourceNotificationService
       * @description
       *
       * This will generate a toast message in the bottom right corner of the screen using the error color scheme<br />
       * # Usage Example #
       * ```js
       ResourceNotificationService.showError('Header','Text');
       ```
       *
       * @param {String} title - The text to be displayed in the confirmation dialog (required.)
       * @param {String} message - The header text to be displayed in the confirmation dialog (required.)
       * @param {Integer} delay - Sets whether a backdrop is to be used with the confirmation dialog (optional) (defaults to true.)
       * @param {Boolean} forceRead - Any additional CSS classes to be added to the confirmation dialog. Each class must be separated by a space (optional.)
       *
       *
       **/
			showError:function(title,message,delay,forceRead){
				forceRead = (forceRead !== void(0)) ? forceRead : false;
				delay = (delay !== void(0)) ? delay : 10000;
				if(message !== '0'){
          Notification.error({
            delegateRemove: forceRead,
            delay:delay,
            title:title,
            message:message
          });
        }
			},
      /**
       * @ngdoc method
       * @name showWarning
       * @methodOf castingApp.services.ResourceNotificationService
       * @description
       *
       * This will generate a toast message in the bottom right corner of the screen using the warning color scheme<br />
       * # Usage Example #
       * ```js
       ResourceNotificationService.showWarning('Header','Text');
       ```
       *
       * @param {String} title - The text to be displayed in the confirmation dialog (required.)
       * @param {String} message - The header text to be displayed in the confirmation dialog (required.)
       * @param {Integer} delay - Sets whether a backdrop is to be used with the confirmation dialog (optional) (defaults to true.)
       * @param {Boolean} forceRead - Any additional CSS classes to be added to the confirmation dialog. Each class must be separated by a space (optional.)
       *
       *
       **/
			showWarning:function(title,message,delay,forceRead){
				forceRead = (forceRead !== void(0)) ? forceRead : false;
				delay = (delay !== void(0)) ? delay : 3000;
				Notification.warning({
					delegateRemove: forceRead,
					delay:delay,
					title:title,
					message:message
				});
			},
			_handleHttpError : function(error, version){
			  if(error.status&&error.status===404&&error.config&&error.config.url.indexOf('remoteconnection')!==-1){
			    return false;
        }
        if(error.status&&error.status===400&&error.config&&error.config.url.indexOf('remoteconnection')!==-1){
          return false;
        }
				if(version === 2){
					if(error && error.data && error.data.errors && error.data.errors.length > 0){
						if(error.data.errors.length > 1 && 'errormsg' in error.data.errors[(error.data.errors.length - 1)]){
							if('errorcode' in error.data.errors[0]){
                resourceNotificationService.showError($translate.instant('1185'), $translate.instant(error.data.errors[0].errorcode));
							} else if('errorcode' in error.data.errors[(error.data.errors.length - 1)] && error.data.errors[(error.data.errors.length - 1)].errorcode.match(/\{(.*)\}$/) === null){
                resourceNotificationService.showError($translate.instant('1185'), $translate.instant(error.data.errors[0].errorcode));
							}
						} else if('errormsg' in error.data.errors[0]){
              resourceNotificationService.showError($translate.instant('1185'), $translate.instant(error.data.errors[0].errorcode));
						}
					}
				} else if(version === 1){
					// code to show error messages for modelservice1 and basemodel1
				}
			}
		};

		return resourceNotificationService;
	}]);
