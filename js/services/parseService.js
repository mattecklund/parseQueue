var app = angular.module('parseQ');

app.service('parseService', function($http, $q, httpRequestInterceptor){
	
	this.postParseData = function(questionAsked){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseQueue',
			data: {
				question: questionAsked,
				status: 'red'
			}
		}).then(
			function(response){
				// console.log(response);
				deferred.resolve(response.data.results);
			}, function(err){
				console.log(err);
				deferred.reject(err);
			}
		)
		return deferred.promise;
	};

	this.getParseData = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/parseQueue'
		}).then(
			function(response){
				// console.log(response);
				deferred.resolve(response.data.results);
			}, function(err){
				console.log(err);
				deferred.reject(err);
			}
		)
		return deferred.promise;
	};

	this.putParseData = function(query){
		// console.log(query);
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/parseQueue/' + query.objectId,
			data: {
				question: query.question,
				status: 'yellow'
			}
		}).then(
			function(response){
				// console.log(response);
				deferred.resolve(response.data.results);
			}, function(err){
				console.log(err);
				deferred.reject(err);
			}
		)
		return deferred.promise;
	};

	this.deleteParseData = function(query){
		// console.log(query);
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/parseQueue/' + query.objectId
		}).then(
			function(response){
				// console.log(response);
				deferred.resolve(response.data.results);
			}, function(err){
				console.log(err);
				deferred.reject(err);
			}
		)
		return deferred.promise;
	};
})











