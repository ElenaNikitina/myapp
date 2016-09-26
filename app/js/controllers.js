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

myApp.controller('RaceCtrl',['$scope', '$rootScope', '$http', '$location', 
function($scope, $rootScope, $http, $location){
	console.log('$location.url() - ', $location.url());
	$rootScope.params = {};
		
}]);

myApp.controller('GtopenCtrl',['$scope', '$rootScope', '$http', '$location', 
function($scope, $rootScope, $http, $location){
	$http.get('pilots/pilotsinfo.json').success(function(data){
		$scope.pilots = data;
		$rootScope.params.path = 'http://www.chayka-ring.com/upload/file/Koltco_2016/6_dmitriy_zhayvoronok_andrey_evtushenko.jpg';
	});
}]);

myApp.controller('Y1600Ctrl',['$scope', '$rootScope', '$http', '$location',
 function($scope, $rootScope, $http, $location){
	$rootScope.params.path = 'http://www.chayka-ring.com/upload/file/Koltco_2016/10_valeriy_shevelev.jpg';
}]);

myApp.controller('GccupCtrl',['$scope', '$rootScope', '$http', '$location',
 function($scope, $rootScope, $http, $location){
	$rootScope.params.path = 'http://www.chayka-ring.com/upload/file/Koltco_2016/6244.jpg';
}]);
