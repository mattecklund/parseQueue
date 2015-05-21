var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
	return {
		request: function(config){
			config.headers = {'X-Parse-Application-Id': '7IP7gtOsZ3pwMNxocWQQOPnDsOG5P7mzVlFMgGAR', 'X-Parse-REST-API-Key': 'uWIWm0qWh8b5i8qzL2lHK6z5eYVqRNGou1KTpCcb'};
			return config;
		}
	};
});