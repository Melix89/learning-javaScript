
console.log("Exercise 01");

function identity(n){
	var mat= "";
	for(var r=1; r<=n; r++){
		for(var c=1; c<=n; c++){
			if (r===c)
				mat += 1 + "\t";
			else
			mat += 0 + "\t";
		}
		mat += "\n";
	}
	console.log(mat);
}

identity(6);
