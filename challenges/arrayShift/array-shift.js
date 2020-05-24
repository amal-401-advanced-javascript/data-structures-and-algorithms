'use strict';


//input [2,4,6,8], 5 - output[2,4,5,6,8]


function insertShiftArray(oldArr,value){
    let insertIntoMiddle= Math.ceil(oldArr.length/2);
    let newArr = [];
    newArr[insertIntoMiddle]=value;
    for (let i=0; i < insertIntoMiddle; i++){
        newArr[i]= oldArr[i];
    }
    for (let i= oldArr.length; i> insertIntoMiddle; i--){
        newArr[i]= oldArr[i-1];
    }
    return newArr ;
}


console.log(insertShiftArray([2,4,6,8], 5));
console.log(insertShiftArray([4,8,15,23,42], 16));

module.exports = insertShiftArray;
<<<<<<< HEAD

=======
>>>>>>> 353a9508fcc9a866179a74076d15935c8a1984d1
