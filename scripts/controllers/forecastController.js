weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

	$scope.city = cityService.city;
	$scope.days = cityService.days;

	$scope.weatherResult =  cityService.weatherResult ($scope.city, $scope.days);

	$scope.convertToDegreeSystem = function(degK, system) {
		cityService.convertToDegreeSystem (degK, system);
	};


	$scope.degreeSys = cityService.degreeSys;

	$scope.$watch('degreeSys', function(){
		cityService.degreeSys = $scope.degreeSys;
	});

	$scope.$watch('days', function(){
		cityService.days = $scope.days;
	});

	$scope.convertToDate = cityService.convertToDate;

}]);