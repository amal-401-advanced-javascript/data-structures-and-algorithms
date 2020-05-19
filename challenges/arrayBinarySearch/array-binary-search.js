'use strict';

function binarySearch(sortedArray , searchKey){
    for(let idx = 0  ; idx < sortedArray.length  ; idx ++){
        if (sortedArray[idx] === searchKey){
            return idx ;
        }
    } 
  return -1 ; 
}

console.log(binarySearch([4,8,15,16,23,42] ,15));
console.log(binarySearch([11,22,33,44,55,66,77], 90));

 module.exports = binarySearch;