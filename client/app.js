"use strict";

angular.module("app", [ 'ui.router',
						'app.controller', 
						'app.directive',
						'app.service'
				])

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'views/home.html',
				controller:'HomeCtrl'
			})

			.state('details', {
				url:'/details',
				templateUrl:'views/details.html',
				controller:'DetailsCtrl'
			})

			.state('playback', {
				url:'/playback',
				templateUrl:'views/playback.html',
				controller:'PlaybackCtrl'
			});

		$urlRouterProvider.otherwise('home');

	})