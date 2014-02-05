'use strict';

var app  = angular.module('MobileDev');

app.controller('FacebookViewCtrl',['$rootScope','$scope', function($rootScope,$scope){

	console.log('Entering the fbViewCtrl');

	console.log('loging the rootscope');
	console.log($rootScope);

	console.log('loging the child scope');
	console.log($scope)
}])