'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('PilotsCtrl', function ($scope, $http){
	$http.get('pilots/pilotsinfo.json').success(function(data){
		$scope.pilots = data;
	});
});