console.log("\n" )
console.log("exercise 04");

function select(data, key, values){
	var result= [];
	for(var i = 0; i<data.length; i++){
		var value = data[i][key];
		if(values.some(function(item) {return value===item; })){
			result.push(data[i]);
		}
        }
	return result;
}

var data = [{id: '01', name: 'duffy'},{id: '02', name: 'donald'},{id: '03', name: 'minnie'},{id: '04', name: 'goofy'}];

var key = "name";
var values = ["donald", "goofy"]; 

var result = select(data, key, values);
console.log(result);

