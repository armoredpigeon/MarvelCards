'use strict';

var app = angular.module('marvelCards', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider
			.otherwise('/');
		
		$stateProvider
			.state("home", {
				url: "/",
				
			})
	}])
