let arr = [5,3,4,1,2];
let temp=0;
for(let i=0;i<arr.length;i++){
    mid=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[mid]){
            mid=j;
        }
    }
    temp = arr[mid];
    arr[mid] = arr[i];
    arr[i] = temp;
}

console.log(arr);