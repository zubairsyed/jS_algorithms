// function Arr(arr,start,end){
    let arr=[1,2,3,4,5,6]
    // console.log(arr)
    let temp=0,x=arr.length;
    let start=0,end=arr.length-1;
    while(start<end){
        console.log("temp",temp)
        temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    // return arr
// }


// console.log(Arr(arr,0,arr.length-1))
console.log(arr)

// method 2 unshift (acts as prepend)
let arrUn=[1,2,3,4,5,6]
let arrRevUn = [];
arrUn.forEach(function (item){
    arrRevUn.unshift(item)
})

console.log(arrRevUn)


// method 3
let arrFor=[1,2,3,4,5,6]
let arrForNew = []
for(let i=arrFor.length-1 ; i>=0;i--){
    arrForNew.push(arrFor[i])
}

console.log(arrForNew)

// method 4 reduce
// Using reduce() method: In this approach we we reduce function which apply callback function on each element and get summarized result of all item in accumulator. First, we will use reduce method on array and take empty as accumulator and append each element at the beginning of array. At the end we get the reverse of original array. 

let x1 = [1,2,3,4,5,6]
let z=0
x1.reduce((accumulator, val) =>{
    [val].concat(accumulator)
},[] )


