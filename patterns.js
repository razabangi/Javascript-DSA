// ====================== traingle pattern
function trianglePattern(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

trianglePattern(5);
