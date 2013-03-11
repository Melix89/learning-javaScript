console.log("\n");

console.log("Exercise 02");

var array = [];

function pushRandomNumber(n){
		for(var i = 1; i<=n; i++){
			array.push(Math.round(Math.random()*100));		
	}
}

pushRandomNumber(5);
console.log("array = " + array);

var result = array.filter(function(item){return item%2!==0; }).
	           sort(function(val1, val2){return val1 - val2 ; });

console.log(result);
		  


