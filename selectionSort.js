let arr = [1,5,3,2,4,6,8,7];

function selectionSort(arr) {  
  for(let i = 0; i < arr.length; i++) {
    let maxIndex = findMax(arr, i, arr.length - 1);
    swap(arr, maxIndex, i);
  }
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

function findMax(arr, start, end) {
  let maxIndex = start;

  for(let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

console.log(arr);
selectionSort(arr);
console.log(arr);