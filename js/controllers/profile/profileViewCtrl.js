'use strict';

var app  = angular.module('MobileDev');

app.controller('ProfileViewCtrl',['$scope','$timeout','Profile', function($scope,$timeout,Profile){
	$scope.profile = Profile;
	$scope.saveSuccess = false;

	if(Profile.loadInfo())
		console.log('loadInfo successfull');

	console.log('Entering the profileViewCtrl');

	console.log('loging the child scope');
	console.log($scope)

	$scope.saveInfo = function(info){
		if(Profile.saveInfo(info)){
			console.log('info saved successfully :)');
			$scope.saveSuccess = true;
		}else{
			//throw an error I guess and provide the user with some feedback
		}

	}

}])