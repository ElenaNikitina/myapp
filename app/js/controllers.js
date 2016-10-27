'use strict';

var myApp = angular.module('myApp', ['firebase', 'ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
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
//	$rootScope.params.path = '';
		
}]);

myApp.controller('GtopenCtrl',['$scope', '$rootScope', '$http', '$location', 
function($scope, $rootScope, $http, $location){
	$http.get('pilots/pilotsinfo.json').success(function(data){
		$scope.pilots = data;
//		$rootScope.params.path = 'http://www.chayka-ring.com/upload/file/Koltco_2016/6_dmitriy_zhayvoronok_andrey_evtushenko.jpg';
	});
}]);

myApp.controller('Y1600Ctrl',['$scope', '$rootScope', '$http', '$location', '$firebaseObject', 
 function($scope, $rootScope, $http, $location, $firebaseObject){
	var database = firebase.database();
	$scope.data = {pilots: []};
	$scope.newRecord = {pilotPlace: '', name: '', lastName: '', car: '', time: '', penalization: '', points:''};
	
	var myDataRef = new Firebase('https://myapp-73570.firebaseio.com/');
	myDataRef.on('child_added', function(snapshot) {

		$scope.data.pilots.push(snapshot.val());
    });

	$scope.addRecord = function(){
      myDataRef.push($scope.newRecord);

	}
}]);

myApp.controller('GccupCtrl',['$scope', '$rootScope', '$http', '$location',
 function($scope, $rootScope, $http, $location){
//	$rootScope.params.path = 'http://www.chayka-ring.com/upload/file/Koltco_2016/6244.jpg';
}]);
