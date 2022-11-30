//fibbonacci using  recursion 
// two major points in recursion
// 1. (fibbonacci) recursion works on calling itself till it meets some condition and 
//      starts adding value from the point where its condition fails now call back starts in 
//      stack memory.
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





function fib(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1;
    }
    console.log("fib n",n)
    return fib(n-1);
}

// fib(n-1) will call itself and also changes the value of n at same time 

console.log(fib(9))

// factorial using recursion
function fact(n){
    if(n==0 || n==1){
        return 1;
    } 
    return n+fact(n-2)
}

console.log("fact",fact(9))