let arrForFindMax = [5,3,6,2,1,7,9,0,21,26,4];

function findMax(arr) {
  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log(findMax(arrForFindMax));

let arrForFindMin = [5,3,6,80,30,7,9,26,21,26,4];

function findMin(arr) {
  let min = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return min;
}

console.log(findMin(arrForFindMin));


// ==========================================
// find index
let arrForFindIndex = [8,4,15,16,18,20,7,9,10,5,1,3];
let targetValueForFindIndex = 9;

function findIndex(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex(arrForFindIndex, targetValueForFindIndex));


// ==================================================
// find index from 2D array

let arr = [
  [1,2,5,9,10],
  [8,7,4,15],
  [16,18,21,26,51]
]

let target = 26;

function getIndexFrom2DArray(arr, target) {
  for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[row].length; col++) {
      if (target === arr[row][col]) {
        return {"row": row, "column": col};
      }
    }
  }

  return "not found";
}

console.log(getIndexFrom2DArray(arr, target));