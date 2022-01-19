function formingMagicSquare(s: number[][]): number {
  let result = 0;

  const rowSum = s.map(r => r.reduce((a, b) => a + b));
  const colSum = s.reduce((a, b) => a.map((x, i) => x + b[i]));  
  
  let n = s.length;
  let diagSumL = 0;
  let diagSumR = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < n; j++) {
      // get left diagonal values
      if (i == j) {
        diagSumL += s[i][j];
      }
      // get right diagonal values
      if (i + j == n - 1) {
        diagSumR += s[i][j];
      }
    }
  }

  console.log(rowSum, colSum, diagSumL, diagSumR);
  
  //  [ 4, 9, 2 ] 15
  //  [ 3, 5, 7 ] 15
  //  [ 8, 1, 5 ] 14
  // 15 15 15 14  14
  return result;
}

let f = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
let resultA = formingMagicSquare(f);
console.log(resultA + '\n'); // 1


// let b = [[4, 8, 2], [4, 6, 7], [6, 1, 6]];
// let resultB = formingMagicSquare(b);
// console.log(resultB + '\n'); // 4

// let c = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
// let resultC = formingMagicSquare(c);
// console.log(resultC + '\n'); // 7