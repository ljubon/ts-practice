function compareTriplets(a: number[], b: number[]): number[] {
  let alice: number = 0
  let bob: number = 0
  for (let i in a) {
    if ((+a[i] >= 1 && +a[i] <= 100) && (+b[i] >= 1 && +b[i] <= 100) && (+a[i] != +b[i])){
      if (a[i] > b[i]) {
        alice += 1
        // console.log("Alice:" + alice);
      } else {
        bob += 1
        // console.log("Bob:" + bob);
      }
    }
  }
  return [alice, bob]
}

// let a = [101,1,2]
let a = [3,1,2]
let b = [2,1,1]
console.log(compareTriplets(a, b))