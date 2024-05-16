let arr = [5, 1, 2, 4, 3];

function cyclicSort(arr) {
  let i = 0;

  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] !== arr[correct]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }
}

console.log(arr);
cyclicSort(arr);
console.log(arr);
