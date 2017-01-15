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

			.state('play', {
				url:'/play/:id',
				templateUrl:'views/play.html',
				controller:'PlayCtrl'
			})
			
			.state('about', {
				url:'/about',
				templateUrl:'views/about.html',
			});

		$urlRouterProvider.otherwise('home');

	})