'use strict';

const arr = [20,18,12,8,5,-2];

function swap(arr, i, j){
  [arr[i],arr[j]] = [arr[j],arr[i]];
}


function partition(arr, pivot, left, right){
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function qsort(arr,left,right){
  let pivot,partitionIndex;

  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    

    qsort(arr, left, partitionIndex - 1);
    qsort(arr, partitionIndex + 1, right);
  }
  return arr;
}

console.log( qsort(arr,0,arr.length-1));
