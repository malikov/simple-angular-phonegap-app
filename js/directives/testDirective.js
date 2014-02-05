'use strict';
var app =  angular.module('MobileDev');

app.directive('navMenuAccess', ['$rootScope', function ($rootScope){
    return{
			restrict : 'A',
			link : function (scope,element,attributes){
				console.log("navMenuAccess Directive");
				console.log(scope);
				console.log(element);
				console.log(attributes);
				
				/*
				var prevDisp = element.css('display')
                , userRole
                , accessLevel;
				
				scope.user = Auth.user.value;
				scope.accessLevels = Auth.accessLevels.value;
				
				
				
				scope.$watch('Auth.user.value', function(user,oldVal,scope){
					
					//	watching for any changes on the user model
					//	when user is updated change value in profile (name of user)
					
					console.log('old user value');
					console.log(oldVal);
					
					console.log('new user value');
					console.log(user);
					
					if(user){
						if(user.role){
							userRole = user.role;
							scope.user = user;
						}
						updateDOM();
					}
				},true);
				
				attributes.$observe('levels', function(al) {
					if(al) accessLevel = scope.$eval(al); // you need to grab the scope of navcontroller
					updateDOM();
				});

				function updateDOM() {
					if(userRole && accessLevel) {
						if(!Auth.authorize(accessLevel, userRole))
							element.css('display', 'none');
						else
							element.css('display', prevDisp);
					}
				}
				*/
			}};
  }]) 