var app = angular.module('angularFirst', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/templates/home.html',
		controller: 'HomeCtrl'
	})
	.when('/difficulty', {
		templateUrl: 'app/templates/difficulty.html',
		controller: 'DifficultyCtrl',

	})
	.when('/game/:difficultLvl', {
		templateUrl: 'app/templates/game.html',
		controller: 'GameCtrl'
		
	});

})
.controller('mainCtrl', ['$route', '$routeParams', '$location', function ($route, $routeParams, $location) {
	this.$route = $route;
	this.$location = $location;
	this.$routeParams = $routeParams;
}]);
