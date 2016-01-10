weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;
	$scope.days = cityService.days;

	$scope.$watch('days', function(){
		cityService.days = $scope.days;
	});

	$scope.weatherResult =  cityService.weatherResult($scope.city, $scope.days);

	$scope.convertToDegreeSystem = cityService.convertToDegreeSystem;


	$scope.degreeSys = cityService.degreeSys;

	$scope.$watch('degreeSys', function(){
		cityService.degreeSys = $scope.degreeSys;
	});



	$scope.convertToDate = cityService.convertToDate;

}]);