console.log("Exercise 02");

function fibonacci(n){
	  if (!(n in fibonacci)) {
    fibonacci[n] =fibonacci(n-1) + fibonacci(n-2);
  }
  return fibonacci[n];
}

fibonacci[1]=0;
fibonacci[2]=1;

console.log(fibonacci(5));
