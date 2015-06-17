app.controller('HomeCtrl', ['$scope','$location', function ($scope,$location) {
	var user = {"firstName":"Irving","lastName":"Sanchez"};
	$scope.user = user;
	
	$scope.selectDifficulty = function(){
		console.log("clicked");
		$location.path("/difficulty");
	}

	

}]);