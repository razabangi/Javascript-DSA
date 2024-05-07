let arr = [5,3,6,2,1,7,9,0,21,26,4];

function findMax(arr) {
  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log(findMax(arr));