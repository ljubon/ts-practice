function pageCount(n: number, p: number): number {
  let result: number = 0;

  if (n >= 1 && n <= Math.pow(10, 5)) {
    if (p >= 1 && p <= n) {

      //            <----- Open from front| Open from back--->
      //  1 | 2 3 | 4 5 | 6 7 | 8 9 |10 11|12 13|14 15|16 17|18 19|18 19|20 21|
      //  0 |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10 |  11 

      let front = Math.floor(p/2); 
      let back = Math.floor((n/2)-front);
      result = Math.min(front, back);

    }
  }
  return result
}

let k = 18;
let l = 15;
let resultG = pageCount(k, l);
console.log(resultG + '\n'); // 0


let i = 83246;
let j = 78132;
let resultF = pageCount(i, j);
console.log(resultF + '\n'); // 2557

let g = 6;
let h = 5;
let resultE = pageCount(g, h);
console.log(resultE + '\n'); // 1


// let e = 5;
// let f = 4;
// let resultC = pageCount(e, f);
// console.log(resultC + '\n'); // 0

// let c = 5;
// let d = 3;
// let resultD = pageCount(c, d);
// console.log(resultD + '\n'); // 1


// let a = 6;
// let b = 2;
// let resultB = pageCount(a, b);
// console.log(resultB + '\n'); // 1
