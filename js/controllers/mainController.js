var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService){
	$scope.questions = {};
	// $scope.query = null;

	$scope.postData = function(){
		parseService.postParseData($scope.question)
			.then(
				function(response){
					// console.log('controller' + response);
					$scope.getData();
					$scope.question = null;
				},function(err){
					console.log('controller' + err);
				}
			)
	}

	$scope.getData = function(){
		parseService.getParseData().then(
			function(response){
				// console.log('getData response:')
				// console.log(response);
				$scope.questions = response;
			}, function(err){
				console.log(err);
			}
		);
	}

	$scope.changeStatus = function(question){
		console.log('changing status of ' + question + ' to yellow');
		parseService.putParseData(question).then(
			function(response){
				console.log(response);
				$scope.getData();
			},function(err){
				console.log(err);
			}
		)
	};

	$scope.deleteQuestion = function(question){
		console.log('Deleting this quesiton');
		parseService.deleteParseData(question).then(
			function(response){
				$scope.getData();
			}, function(err){
				console.log(err);
			}
		)
	}

	$scope.getData();

	// setInterval(function(){
 //    	$scope.getData();
 //  	}, 1500)

})