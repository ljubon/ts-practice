function aVeryBigSum(ar: number[]): number {
  let sum: number = 0
  for (let i of ar) {
    sum += i
  }
  return sum
}

let tmp = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
console.log(tmp);
