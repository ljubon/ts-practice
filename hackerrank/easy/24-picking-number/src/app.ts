function pickingNumbers(a: number[]): number {
  let result = [];
  if (a.length >= 2 && a.length <= 100) {
    for (let i = 0; i < a.length; i++) {
      let count = 1;
      for (let j = 0; j < a.length - 1; j++) {
        if (Math.abs(a[i + 1] - a[j + 1]) <= 1 && a[j + 1] ) {
          count += 1;
        } else {
          result.push(count);
        }
      }
    }
    
  }
  return Math.max(...result);
}

// let a = [4, 6, 5, 3, 3, 1];
// let resultA = pickingNumbers(a);
// console.log(resultA + '\n'); // 3

let b = [1, 2, 2, 3, 1, 2];
let resultB = pickingNumbers(b);
console.log(resultB + '\n'); // 5

// let c = [98, 3, 99, 1, 97, 2];
// let resultC = pickingNumbers(c);
// console.log(resultC + '\n'); // 2