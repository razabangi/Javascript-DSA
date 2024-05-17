function recursion(num) {
    if (num > 0) {
      console.log(num);
      recursion(num - 1);
    }
  }
  
  let num = 5;
  recursion(num); // 5,4,3,2,1

  // ========================== factorial by using resursion

  let target = 5;

  function factorial(num) {
    if (num === 0) {
      return 1;
    }
  
    return num * factorial(num - 1)
  }
  
  console.log(factorial(target))
  