// selection sort
let arr = [5,3,4,1,2];
let temp=0;
for(let i=0;i<arr.length;i++){          //O(n)
    mid=i;
    for(let j=i+1;j<arr.length;j++){    // o(n)
        if(arr[j]<arr[mid]){
            mid=j;
        }
    }
    temp = arr[mid];
    arr[mid] = arr[i];
    arr[i] = temp;
}

console.log(arr);

// time complexity o(n)^2
// space complexity o(1)