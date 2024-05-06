let arr = [5, 1, 3, 4, 7, 2, 6];

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
}

function swap(arr, first, last) {
  let temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
}

console.log(arr);
insertionSort(arr);
console.log(arr);
