'use strict';

/*
	This is a controller for the home navigator
*/


var app  = angular.module('MobileDev');

app.controller('HomeViewCtrl',['$rootScope','$scope', function($rootScope,$scope){

	console.log('Entering the HomeViewCtrl');

	console.log('loging the rootscope');
	console.log($rootScope);

	console.log('loging the child scope');
	console.log($scope)
	
	var view = {
		title : "Home Page"
	}

	$scope.view = view;

	//$scope.ons.navigator.pushPage('pages/profile/index.html', { title: 'Profile' });

	$scope.pushProfilePage = function(){
		$scope.ons.navigator.pushPage('pages/profile/index.html', { title: 'Profile' });
	}

	$scope.pushFbPage = function(){
		$scope.ons.navigator.pushPage('pages/facebook/index.html', { title: 'Facebook' });
	}


}])