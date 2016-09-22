'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'ngSQLite']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
	$routeProvide
		.when('/',{
			templateUrl:'template/race.html',
			controller: 'RaceCtrl'
		})
		.when('/gtopen',{
			templateUrl:'template/gtopen.html',
			controller: 'GtopenCtrl'
		})
		.when('/y1600',{
			templateUrl:'template/y1600.html',
			controller: 'Y1600Ctrl'
		})
		.when('/gccup',{
			templateUrl:'template/gccup.html',
			controller: 'GccupCtrl'
		})
		.otherwise({
        redirectTo: '/'
        });
}]);

myApp.controller('RaceCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
	console.log('$location.url() - ', $location.url());
}]);

myApp.controller('GtopenCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
	$http.get('pilots/pilotsinfo.json').success(function(data){
		$scope.pilots = data;
	});
}]);

myApp.controller('Y1600Ctrl',['$scope', '$http', '$location', function($scope, $http, $location){
	
}]);

myApp.controller('GccupCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
	
}]);
