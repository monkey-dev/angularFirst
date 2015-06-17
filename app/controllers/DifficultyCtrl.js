app.controller('DifficultyCtrl', ['$scope','$location','dataSrvc', function ($scope,$location,dataApi) {
	
	var difficultyOptions = dataApi.getDiffOptions();
	console.log(difficultyOptions);
	$scope.difficulty= difficultyOptions;
	
	$scope.goHome = function(){
		console.log("clicked");
		$location.path("/");
	}
	$scope.letsPlay = function(difficulty){
		console.log("clicked");
		$location.path("/game/"+difficulty);
	}

}]);