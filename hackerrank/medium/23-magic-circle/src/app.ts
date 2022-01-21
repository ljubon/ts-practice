function calculateSum(s: number[][]): ([number[], number[], number, number]) {
  // starting from 1st to right
  const rowSum: number[] = s.map(r => r.reduce((a, b) => Math.abs(a) + Math.abs(b)));
  // starting from 1st to down
  const colSum: number[] = s.reduce((a, b) => a.map((x, i) => Math.abs(x) + Math.abs(b[i])));

  let n = s.length;
  let diagSumL: number = 0;
  let diagSumR: number = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < n; j++) {
      // get left diagonal values
      if (i == j) {
        diagSumL += Math.abs(s[i][j]);
      }
      // get right diagonal values
      if (i + j == n - 1) {
        diagSumR += Math.abs(s[i][j]);
      }
    }
  }

  return [rowSum, colSum, diagSumL, diagSumR]
}


function formingMagicSquare(s: number[][]): number {
  let cost = 0;

  let matrix = s;
  calculateSum(matrix)[0].forEach((row_element, row_index) => {
    if (row_element < 15) {
      // console.log([row_element, row_index]);
      let diff = 15 - row_element
      let min = 10
      matrix[row_index].forEach((matrix_element, matrix_index) => {
        if (matrix_element < (9 - diff) && matrix_element < min) {
          // console.log(matrix_element, matrix_index);
          min = matrix_element
          matrix[row_index][matrix_index] += diff
          cost += diff
        }
      });
    } else if (row_element > 15) {
      // console.log([row_element, row_index]);
      let diff = row_element - 15
      let min = 10
      matrix[row_index].forEach((matrix_element, matrix_index) => {
        if (matrix_element < (9 - diff) && matrix_element < min) {
          // console.log(matrix_element, matrix_index);
          min = matrix_element
          matrix[row_index][matrix_index] -= diff
          cost += diff
        }
      });
    }
  });

  // 4  9  2
  // 3  5  7
  // 8  2  5
  // 15 16 14  <--- SUm

  console.log(calculateSum(matrix))
  calculateSum(matrix)[1].forEach((col_element, col_index) => {

    if (col_element < 15) {
      // console.log([col_element, col_index]); [ 15, 15, 15 ], [ 15, 16, 14 ]
      let diff = 15 - col_element
      let min = 10
      matrix.forEach((matrix_element, matrix_index) => {
        // console.log(matrix_element, matrix_index);
        if (matrix_element[col_index] < (9 - Math.abs(diff)) && matrix_element[col_index] < min) {
          // console.log(matrix_element[col_index]);
          min = matrix_element[col_index]
          matrix[col_index][matrix_index] += Math.abs(diff)
          cost += Math.abs(diff)
        }
      });
    } else if (col_element > 15) {
      // console.log([col_element, col_index]);
      let diff = 15 - col_element
      let min = 3
      matrix.forEach((matrix_element, matrix_index) => {
        console.log(matrix_element, matrix_index);
        if (matrix_element[col_index] < (9 - Math.abs(diff))) {
          console.log(matrix_element[col_index]);
          matrix[col_index][matrix_index] -= Math.abs(diff)
          cost += Math.abs(diff)
        }
      });
    }
  });

  //  [ 4, 9, 2 ] 15
  //  [ 3, 5, 7 ] 15
  //  [ 8, 1, 5 ] 14
  // 15 15 15 14  14
  console.log(matrix);
  return cost;
}

let f = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
let resultA = formingMagicSquare(f);
console.log(resultA + '\n'); // 1




      // matrix[col_index].forEach((matrix_element, matrix_index) => {
      //   if (matrix_element < (9 - diff) && matrix_element < min) {
      //     // console.log(matrix_element, matrix_index);
      //     min = matrix_element
      //     matrix[col_index][matrix_index] += diff
      //     cost += diff
      //   }
      // });

// let b = [[4, 8, 2], [4, 6, 7], [6, 1, 6]];
// let resultB = formingMagicSquare(b);
// console.log(resultB + '\n'); // 4

// let c = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
// let resultC = formingMagicSquare(c);
// console.log(resultC + '\n'); // 7