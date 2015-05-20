var app = angular.module("ekta", []);


app.controller("CsCtrl", function($scope, $http){
	$scope.courses = [
					{
					"name" : "Introduction to Algorithms",
					"code" : "Design and Analysis of Algorithms",
					"author" : "Rivest et.al"
					}
				];
			
});
