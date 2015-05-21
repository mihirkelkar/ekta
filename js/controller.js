var app = angular.module("ekta", []);

app.controller("CsCtrl", ["$scope", "$http",function($scope, $http){
	$http.get('../data/cs.json').success(function(data){
		console.log(data);
		$scope.courses = data;
	});

	$scope.update = function(sub){
		console.log(sub.name);
		console.log(sub.book);
		$scope.courses.concat({
			"name" : sub.book,
			"code" : sub.name
		});
		$http.post('../data/cs.json', $scope.courses).
  			success(function(data, status, headers, config) {
  				$scope.courses = data;
    			console.log("Success");
  			});
		}
	}]		
);
