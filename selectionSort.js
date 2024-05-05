let arr = [5,1,3,4,8,2,6];

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let maxIndex = findMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
  }
}

function swap(arr, first, last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
}

function findMaxIndex(arr, first, last) {
  let max = first;

  for(let i = first; i <= last; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }

  return max;
}

console.log(arr);
selectionSort(arr);
console.log(arr);