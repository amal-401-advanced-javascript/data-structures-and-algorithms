'use strict';


let arr = [];
function reverseArray(number){
    
    for(let x=number.length-1; x >= 0 ; x--){
        arr.push(number[x]);
        
    }
    return arr;

}
//first array
let arr1 = [1, 2, 3, 4, 5, 6];
let reverseArrResult1 = reverseArray(arr1);
console.log(`first array output: ${reverseArrResult1}`);

//second array
// let arr2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
// let reverseArrResult2 = reverseArray(arr2);
// console.log(`second array output: ${reverseArrResult2}`);

//third array
// let arr3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
// let reverseArrResult3 = reverseArray(arr3);
// console.log(`third array output: ${reverseArrResult3}`);
