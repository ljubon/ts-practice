function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let result: number = 0

  if (n >= 2 && n <= 100 && k >= 1 && k <= 100) {
    ar.filter(x => x >= 1 && x <= 100).forEach((x, i) => {
      for (let j = i + 1; j <= ar.length; j++ ){
        let sum = x + ar[j]
        if (i < j && sum % k == 0) {
          // console.log(ar[i], ar[j], sum);
          result++
        }
        
      }
    })
  }
  return result
}

let a = 6
let b = 3
let c = [1, 3, 2, 6, 1, 2]
console.log(divisibleSumPairs(a, b, c));