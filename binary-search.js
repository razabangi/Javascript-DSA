let arr = [1,2,3,4,5,6,7,8,9,10,11];
let target = 9;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearch(arr, target));

// -----------------------------------------------------------------------
// Get Ceil Value

let arrayForGettingCeil = [1,4,5,6,7,8,10,15,16,18,20];
let targetValue = 17;

function getCeilValue(arr, target) {
  let start = arr[0];
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1
    } else {
      return mid;
    }
  }

  return arr[start];
}

console.log(getCeilValue(arr, target));