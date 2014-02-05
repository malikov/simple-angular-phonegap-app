'use strict';

angular.module('MobileDev', [ 
	'ngTouch', 
	'ngRoute',
	'onsen.directives',
	'btford.phonegap.ready',
	'malikov.phonegap.splashscreen',
	'malikov.phonegap.storage'
])
.config(['$routeProvider','$locationProvider','$provide',
	function($routeProvider,$locationProvider,$provide){
	/*
		Define interceptors for the system here
	*/

	console.log('angular.config');

	console.log('log routeProvider');
	console.log($routeProvider);

	console.log('log locationProvider');
	console.log($locationProvider);

}])
.run(['$rootScope','splashscreen',
	function($rootScope,splashscreen){
	
	/*
		launch additional information here
	*/

	console.log('angular.run');
	splashscreen.display();

}]);
