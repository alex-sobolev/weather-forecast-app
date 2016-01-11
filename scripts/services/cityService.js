weatherApp.service('cityService', cityService);

cityService.$inject = ['$resource'];

function cityService($resource) {

	this.city = 'Moscow, Russia';
	this.days = '2';

	this.weatherResult = function(city, days) {

		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
			callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

			return weatherAPI.get({APPID: '1de17c588271d44fcbdf0b93a48a6165', q: city, cnt: days});
	}

	this.convertToDegreeSystem = function(degK, system) {
		if(system === 'Fahrenheit') {
			return Math.round((1.8 *(degK - 273) + 32));
		} else if(system === 'Celsius') {
			return Math.round(degK - 273.15);
		} else if(system === 'Kelvin'){
			return degK;
		}  else {
			return;
		}
	}

	this.degreeSys = 'Celsius';

	this.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}


}

