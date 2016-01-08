weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;
	$scope.days = cityService.days;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

	$scope.$watch('days', function() {
		cityService.days = $scope.days;
	});

}]);