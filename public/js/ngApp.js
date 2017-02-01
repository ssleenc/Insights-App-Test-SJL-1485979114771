(function(angular){
	
	var app = angular.module('App', ['ngRoute']);
	
	app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: '/views/search.html',
		controller: 'SearchController'
	})
	
	.otherwise({ redirectTo: '/'});
	
	$locationProvider.html5Mode(false).hashPrefix('!');
	
	})
	
})(window.angular);