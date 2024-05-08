function recursion(num) {
    if (num > 0) {
      console.log(num);
      recursion(num - 1);
    }
  }
  
  let num = 5;
  recursion(num); // 5,4,3,2,1
  