function diagonalDifference(arr: number[][]): number {
  let primDiag = 0;
  let secDiag = 0;
  arr.forEach((x, i) => {
    if ( +x[i] >= -100 && +x[i] <= 100) {
      primDiag += x[i]
      secDiag += x[x.length - 1 - i]
    }
  });
  return Math.abs(primDiag-secDiag)
}
let arrayTest = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let testArray = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]
let result = diagonalDifference(arrayTest)
console.log(result);


