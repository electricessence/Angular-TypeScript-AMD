main.$inject = ['$scope'];
function main($scope) {
	$scope.message = "Hello";
}

angular
	.module('MyApp', [])
	.controller("MainController", main);
