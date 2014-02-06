'use strict';

angular.module('MobileDev', [ 
	'ngTouch', 
	'ngRoute',
	'onsen.directives',
	'btford.phonegap.ready',
	'malikov.phonegap.splashscreen',
	'malikov.phonegap.storage'
])
.config(['$routeProvider','$locationProvider','$provide','$httpProvider',
	function($routeProvider,$locationProvider,$provide,$httpProvider){
	/*
		Define interceptors for the system here
	*/

	console.log('angular.config');

	console.log('log routeProvider');
	console.log($routeProvider);

	console.log('log locationProvider');
	console.log($locationProvider);

	/*
		creating a provider to intercept errors or 401 requests
	*/

	/*
		interceptor
	*/
	$provide.factory('mobileDevInterceptor',function($q, $rootScope){
		console.log($q);
		console.log($rootScope);
		
		var interceptor = {
			/*
				Catches request before it is sent
			*/
			request : function(config){
				console.log("Request");
				console.log(config);
					
				/*
					handle requests here
				*/
					
				return config || $q.when(config);
			},
			
			/*
				Catches errors when request fails
			*/
			requestError : function(requestError){
				console.log("RequestError");
				console.log(requestError);
				
				/*
					handle error here
				*/
				
				return $q.reject(requestError);
			},
			
			/*
				Handles response success
			*/
			response : function(response){
				console.log("Response");
				console.log(response);
				
				return response || $q.when(response);
			},
			
			/*
				Handles response failure
			*/
			responseError : function(error){
				console.log("ResponseError");
				console.log("Error status : "+error.status);
				console.log(error);
				
				return $q.reject(error);
			}			
		};
		
		return interceptor;
		
	  });
	  
	  
	  /*
		Adding interceptor to the httpProvider
	  */
	  $httpProvider.interceptors.push('mobileDevInterceptor');

}])
.run(['$rootScope','splashscreen',
	function($rootScope,splashscreen){
	
	/*
		launch additional information here
	*/

	console.log('angular.run');
	splashscreen.display();

}]);
