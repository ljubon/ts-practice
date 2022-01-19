function sockMerchant(n: number, ar: number[]): number {
  let result: number = 0;
  if (n >= 1 && n <= 100) {

    ar.sort();
    let count = 0;
    for (let i = 0; i <= ar.length - 1; i++) {
      if (ar[i] == ar[i + 1]) {
        result += 1;
        i = i + 1;
      }

    }
  }
  return result
}

let a = 7;
let b = [1, 2, 1, 2, 1, 3, 2];
let resultB = sockMerchant(a, b);
console.log(resultB);

let c = 9;
let d = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let resultD = sockMerchant(c, d);
console.log(resultD);