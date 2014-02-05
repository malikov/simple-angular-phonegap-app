'use strict';

var app  = angular.module('MobileDev');

app.controller('MainViewCtrl',['$rootScope','$scope','$timeout','Constants','splashscreen', 
	function($rootScope,$scope,$timeout,Constants,splashscreen){

	console.log('Entering the fbViewCtrl');

	console.log('loging the rootscope');
	console.log($rootScope);

	console.log('loging the child scope');
	console.log($scope)
	
	var mainView = {
		menuTpl : 'pages/sliding_menu.html',
		homepageTpl : 'pages/homeNavigator.html'
	}

	var homeNavigator = {
		title : Constants.app_name+' - Homepage',
		template : 'pages/home/index.html',
		toggleMenu : function(){
			/*
				perhaps this should be only in one variable
			*/
			$scope.ons.slidingMenu.toggleMenu();
		}
	}

	var profileNavigator = {
		title : Constants.app_name+' - Profile',
		template : 'pages/profile/index.html',
		toggleMenu : function(){
			$scope.ons.slidingMenu.toggleMenu();
		}
	}

	var facebookNavigator = {
		title : Constants.app_name+' - Fb',
		template : 'pages/facebook/index.html',
		toggleMenu : function(){
			$scope.ons.slidingMenu.toggleMenu();
		}
	}
	$scope.main = mainView;
	$scope.homeNav = homeNavigator;
	$scope.profileNav = profileNavigator;
	$scope.fbNav = facebookNavigator;

	/*
		hide the splashcreen when all of this is rendered
	*/
	$timeout(function(){
	 	splashscreen.hide()
	},
	8000);
	
}])