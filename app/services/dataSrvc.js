
app.factory('dataSrvc',function ($http) {
	var gridArray =[] ;
	var gridMade= {};
	var diffOptions =  JSON.parse('[{"name":"Beginner","id":1,"option":{"gridX":4,"gridY":4}},{"name":"Amateur","id":2,"option":{"gridX":4,"gridY":6}},{"name":"Pro","id":3,"option":{"gridX":4,"gridY":8}}]');
	var posValues = Array([0,1,2,3,4,5,6,7,8,9]);

	function getDiffOptions(){
		return diffOptions;
	}
	function getGridInfo(id){
		var diffOptions = this.getDiffOptions();
		
		for(var i = 0; i < diffOptions.length; i++){
			if(diffOptions[i].id == id){
				return diffOptions[i];
			}
			
		}
		return null;
	}
	function makeGrid(gridVals){

		var gridTotal = Math.floor(Number(gridVals.gridX) * Number(gridVals.gridY)); //Becouse 1 element have to repeat it twice

		for (var gridMade=[],i=0;i<gridTotal;){
			var j = Math.floor(Math.random() * posValues[0].length);
			var rand = {"signVal":posValues[0][j]};
			gridArray[i]= rand;
			gridArray[i+1]= rand;
			i=i+2;
		}
		arrayShuffled = shuffleArray(gridArray);

		//arrayOrdered = sliceArray(arrayShuffled, gridVals);

		gridMade = JSON.parse(JSON.stringify(arrayShuffled));
		
		return gridMade;
	}
	function shuffleArray(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
		 while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}

		return array;
	}

	function sliceArray(arrayShuffled, gridVals){
		var arrayOrdered = [];
		for (var j = gridVals.gridY; j > 0; j--) {
			var start = (gridVals.gridX*j)-gridVals.gridX;
			var end = (gridVals.gridX*j);
			
			arrayOrdered.push(arrayShuffled.slice(start, end));
			
		}

		return arrayOrdered;
	}

	function addRecord(arrayShuffled, gridVals){
		$http.get('./api/data/records.json').success(function(response){ return response;});
		
	}

	return {
		getDiffOptions: getDiffOptions,
		makeGrid: makeGrid,
		getGridInfo: getGridInfo,
		addRecord : addRecord

	}

});