weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

	$scope.city = cityService.city;
	$scope.days = cityService.days;

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

	$scope.$watch('days', function() {
		cityService.days = $scope.days;
	});

	$scope.submitWeatherRequest = function() {
		$location.path('/forecast');
	};

}]);