function pickingNumbers(a: number[]): number {
  let result: number = 0;
  if (a.length >= 2 && a.length <= 100) {
    a.sort();
    let count: number = 1;
    let subarray_first_element = a[0];
    for (let i = 1; i < a.length; i++) {
      if (subarray_first_element == a[i] || subarray_first_element + 1 == a[i]) {
        count++
        if (count == a.length) result = count;
      } else {
        if (count > result) {
          result = count;
        }
        count = 1;
        subarray_first_element = a[i];
      }
    }
  }
  return result;
}
// 10/10 Tests passed

let a = [4, 6, 5, 3, 3, 1];
let resultA = pickingNumbers(a);
console.log(resultA + '\n'); // 3

let b = [1, 2, 2, 3, 1, 2];
let resultB = pickingNumbers(b);
console.log(resultB + '\n'); // 5

let c = [98, 3, 99, 1, 97, 2];
let resultC = pickingNumbers(c);
console.log(resultC + '\n'); // 2

let test9 = [14, 18, 17, 10, 9, 20, 4, 13, 19, 19, 8, 15, 15, 17, 6, 5, 15, 12, 18, 2, 18, 7, 20, 8, 2, 8, 11, 2, 16, 2, 12, 9, 3, 6, 9, 9, 13, 7, 4, 6, 19, 7, 2, 4, 3, 4, 14, 3, 4, 9, 17, 9, 4, 20, 10, 16, 12, 1, 16, 4, 15, 15, 9, 13, 6, 3, 8, 4, 7, 14, 16, 18, 20, 11, 20, 14, 20, 12, 15, 4, 5, 10, 10, 20, 11, 18, 5, 20, 13, 4, 18, 1, 14, 3, 20, 19, 14, 2, 5, 13];
let resultTest9 = pickingNumbers(test9);
console.log(resultTest9 + `\n`); // 15

let test6 = [66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66];
let resultTest6 = pickingNumbers(test6);
console.log(resultTest6 + `\n`); // 100


/* 3/10 test cases failed :(
  let result: number = 0;
  if (a.length >= 2 && a.length <= 100) {
    for (let i in a.filter(x => x > 0 && x <= 100)) {
      for (let j in a.filter(x => x > 0 && x <= 100)) {
        if (Math.abs(a[parseInt(j)] - a[parseInt(i)]) <= 1) {
          res = Math.max(res, parseInt(j) - parseInt(i) + 1);
        }
      };
    };
  }
  return result;

*/
