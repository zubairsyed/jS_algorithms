// function powr(n){
//     if(n<1){
//         return false
//     }
//     while(n > 1){
//         console.log(n)
//         if( n%2 !== 0){
//             return false
//         }
//         n=n/2
//     }
//     return true;
// }

// console.log(powr(6))
// console.log(powr(2))
// console.log(powr(5))

// powerof 2 using recursion

// function pow2(n){
//     if(n<0){
//         return false
//     }
//     return (n & (n-1)) === 0
// }

// console.log(pow2(31))
// console.log(pow2(16))
// console.log(pow2(32))

function pow2(n){
	if(n<1){
		return false
	}
	while(n>0){
	if(n%2 !== 0){
		return false
	}
	n=n/2;
	}
	return true
}


console.log(pow2(7))
console.log(pow2(2))
console.log(pow2(101))