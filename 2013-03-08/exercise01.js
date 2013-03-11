console.log("Exercise 01");

var array = [];

function pushNumber(n){
	while (n>0){
		array.unshift(n);
		n--;
	}
}

pushNumber(5);
console.log("array = " + array);

var result=
	array.filter(function(item){return item%2===0}).
		map(function(item){return item*2}).
		filter(function(item){return item%4===0}).
		reduce(function(prev, cur){return prev + cur});

console.log(result);
	
