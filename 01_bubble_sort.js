// Time complexity o(n)^2.
function Bubble(arr){
    console.log(arr)
    let temp=0;
    // on every iteration the elements are matched and swapped
    for(let i=0;i<arr.length;i++){          // o(n)
        for(let j=0;j<arr.length;j++){      // o(n)
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}


const arr=[5,3,1,6,18,10,4,7,7,10,3]
console.log(Bubble(arr));

// time complexity o(n)^2
// space complexity o(1)