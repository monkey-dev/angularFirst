app.controller('GameCtrl', ['$scope','$routeParams', 'dataSrvc', function ($scope,$routeParams, dataApi) {
	var elemntActive=0;
	var diffLvl = Number($routeParams.difficultLvl);
	var timeRunning = false;
	$scope.difficulty = diffLvl;

	var gridSize = 	dataApi.getGridInfo(diffLvl);
	var gridMade = dataApi.makeGrid(gridSize.option);

	$scope.gridSize =gridSize.option;
	$scope.gridArray = gridMade;
	$scope.timerCount =  0;
	
	$scope.timerStart = function(){
		
		if(!timeRunning){
			timeRunning = true;
			startCounter();
		}
	};

	
	function startCounter(){
		setInterval(function(){
			$scope.timerCount = $scope.timerCount+1;
			$scope.$apply();
		}, 1000);  
	};

	

}])
.directive('myCarts', [function () {
	return {
		restrict: 'A',
		transclude:true,
		controller: function($scope){
			
		},
		template:'<div ng-model="gridSize" ng-repeat="grid in gridArray" id="cart{{$index}}" class="cart-down" >{{grid.signVal}}</div>',
		link: function(scope, element, attr, cartFlipped){
			console.log('liked myCarts')
			
		}
	};
	

}])
.directive('cartFlipped', [function () {
	return {
		restrict: 'C',
		controller: function($scope){
			
		},
		link: function(scope, element, attr){
			console.log('liked cartsFlipped')
			
		}

		
	};
}]);

/*
			
			element.on('click', flipCart);
			cartsUpSides = function(){
				angular.forEach(scope, function(item){
					console.log(item);
				});
			};

			function flipCart(){
				event.preventDefault();
				
				//scope.cartsActive.push(element);
				cartsUpSides();
				/*var cartsOpen = scope.cartArray;
				console.log(scope.cartArray.length);
				switch(cartsOpen.length){
					case 0:
					flipUp(element);
					break;
					case 1:
					flipUp(element);
					compareCarts(cartsOpen);
					break;
					default:
					flipDown();
					break;
				}
				console.log(cartsOpen);
			};

			function flipUp(element){
				event.preventDefault();
				element.removeClass("cart-down").addClass("cart-flipped");
				
			};
			function flipDown(){
				event.preventDefault();
				element.find("card-flipped").removeClass("cart-flipped").addClass("cart-down");
				scope.cartArray=[];
			};

			
			function compareCarts(carts){
				event.preventDefault();
				console.log(carts[0].attributes.value.value);
				if(carts[0].attributes.value.value == carts[1].attributes.value.value){
					console.log(carts[0].attributes.value.value + " ES IGUAL A " + carts[1].attributes.value.value);
					call solved
				}else{
					console.log(carts[0].attributes.value.value + " NO ES IGUAL A " + carts[1].attributes.value.value);
					call flip down
					arrayCarts clean
					flipDown(carts);
				}
				console.log(scope.grid.signVal);
			};

			function cartsSolved(){
				event.preventDefault();
				console.log(scope.grid.signVal);
			};
			*/