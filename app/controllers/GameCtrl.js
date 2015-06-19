app.controller('GameCtrl', ['$scope','$routeParams', 'dataSrvc', function ($scope,$routeParams, dataApi) {
	var elemntActive=0;
	var diffLvl = Number($routeParams.difficultLvl);
	var timeRunning = false;
	var intervalId = null;
	$scope.cartFlipped=[];
	$scope.difficulty = diffLvl;
	var gridSize = 	dataApi.getGridInfo(diffLvl);
	var gridMade = dataApi.makeGrid(gridSize.option);

	$scope.gridSize =gridSize.option;
	$scope.gridArray = gridMade;
	$scope.timerCount =  0;
	
	$scope.timeStart = function(){
		if(!timeRunning){
			timeRunning = true;
			startCounter();
		}
	};

	$scope.timeStop = function(){
		console.log("se detiene el reloj"+intervalId);
		window.clearInterval(intervalId);
	};
	function startCounter(){
		intervalId = setInterval(function(){
			$scope.timerCount = $scope.timerCount+1;
			$scope.$apply();
		}, 1000);  
	};

	

}])
.directive('myCarts', [function () {
	return {
		restrict: 'A',
		require:'',
		transclude:true,
		controller: function($scope){

			checkFlippedCarts = function(){
				var cartsFlipped = $scope.cartFlipped.length;
				return cartsFlipped;
			};

			addFlippedCart = function(e){
				$scope.cartFlipped.push(e);
				$scope.$apply();
			};

			compFlippedCart = function(){
				var firstElement = $scope.cartFlipped[0][0];
				var secondElement = $scope.cartFlipped[1][0];
				if(Number(firstElement.attributes.value.value) == Number(secondElement.attributes.value.value)){
					return true;
				}else{
					return false;
				}
			};

			openFlippedCarts = function(){
				angular.forEach($scope.cartFlipped,function(item){
					var el = angular.element(item[0]);
					el.removeClass('cart-flipped').addClass('cart-open');
					el.off('click');
				});
				$scope.cartFlipped=[];
				$scope.$apply();
				
			};

			turnDownCarts = function(){
				angular.forEach($scope.cartFlipped,function(item){
					var el = angular.element(item[0]);
					el.removeClass('cart-flipped').addClass('cart-down');
				});
				$scope.cartFlipped=[];
				$scope.$apply();
			};

			gameFinished = function(){
				var result = document.getElementsByClassName("cart-down");
				if(result.length>0){return false;}else{return true;}
				
			};
			stopTimer= function(){
				$scope.timeStop();
			}
			
		},
		templateUrl:'./app/templates/cart.html',
		link: function(scope, element, attr){
			element.on('click',function(event){
				event.preventDefault();
				var countFlipped = checkFlippedCarts();
				if(element.hasClass('cart-down')){
					switch(countFlipped){
						case 0:
							element.removeClass('cart-down').addClass('cart-flipped');
							addFlippedCart(element);
						break;
						case 1:
							element.removeClass('cart-down').addClass('cart-flipped');
							addFlippedCart(element);
							var cartValidation = compFlippedCart();
							if(cartValidation){
								openFlippedCarts();
								if(gameFinished()){
									stopTimer();
								}
							}else{
								turnDownCarts();
							}
						break;
						default:
							turnDownCarts();
						break;
					}
				}
			});
			
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