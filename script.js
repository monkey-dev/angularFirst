/**
* angularFirst Modul.controller('Mycontroller', ['$scope', function ($scope) {
	
}])
*
* Description
*/
angular.module('angularFirst', [])
	.controller('MyController', ['$scope','$http', function ($scope, $http) {
		$http.get("api/users.json").then(function(response){
			$scope.user = response.data;
		}) ;
		$scope.message = "Llamada al Controlador";
	
}]);