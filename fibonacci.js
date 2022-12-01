//fibbonacci using  recursion 
// two major points in recursion
// 1. (fibbonacci) recursion works on calling itself till it meets some condition and 
//      starts adding value from the point where its condition fails now function call back starts in 
//      stack memory, every function callback contain some value in it basically a return type.
// 2. it changes the value n at the same time

                // factorial                           fibonacci

    // return n * fact(n-1)                      return fib(n-1)*fib(n-2)
    // here n value changes and a               here only the function call till the 
    // function call                            condition satisfies once done it uses 
    // is attached to it to meet the            the values of condition pass and 
    // condition                                start using them
    // as condition meets it starts 
    // function
    // call back where it adds the 
    // n + value 
    // of callback 





// // function fib(n){
// //     if(n==0){
// //         return 0
// //     }else if(n==1){
// //         return 1;
// //     }
// //     console.log(n)
// //     return fib(n-1)+fib(n-2)
// // }

// // // fib(n-1) will call itself and also changes the value of n at same time 

// // console.log(fib(9))

// // // factorial using recursion
// // function fact(n){
// //     if(n==0 || n==1){
// //         return 1;
// //     } 
// //     return n+fact(n-2)
// // }

// // console.log("fact",fact(9))


// // prime number
// let i=2;
// let count=0;
// function prime(n){
//     let z=n
//     if(z%n==0 && n<=5){
//         count++;
//     }
//     if(count>=1){
//         return -1
//     }
//     console.log(count)
//     return prime(n-1);
// }

// prime(5)
// // if(x==-1){
// //     console.log("not a prime number ", x)
// // }else{
// //     console.log("a prime number ", x)
// // }



// JavaScript program to find whether a Number
// is Prime or Not using Recursion

	// Returns true if n is prime, else
	// return false.
	// i is current divisor to check.
	function isPrime(n, i)
	{
		// Base cases
		if (n <= 2)
			return (n == 2) ? true : false;
		if (n % i == 0){
			return false;
        }
		if (i * i > n){
			return true;
        }
            console.log(n,i);
		// Check for next divisor
		return isPrime(n, i + 1);
	}


// Driver code

		
	let n = 911;

		if (isPrime(n, 2))
			console.log("Yes");
		else
			console.log("No");
