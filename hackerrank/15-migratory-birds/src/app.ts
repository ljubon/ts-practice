function migratoryBirds(a: number[]): number {
  let maxCount = 0;
  let maxValue = 0;
  if (a.length >= 5 && a.length <= 2 * Math.pow(10, 5)) {


    let aSorted = a.sort().reverse()
    let i = 0
    while (i < aSorted.length) {

      let count;
      if (aSorted.lastIndexOf(aSorted[i]) == aSorted.indexOf(a[i])) {
        count = 1
      } else {
        count = aSorted.lastIndexOf(aSorted[i]) - aSorted.indexOf(aSorted[i]);
      }

      if (count >= maxCount) {
        maxCount = count
        maxValue = aSorted[i]
      }

      i += count
    }

  }

  return maxValue
}


let a = [1, 4, 4, 4, 5, 3] // 4
console.log(migratoryBirds(a));

let b = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4] // 3
console.log(migratoryBirds(b));

let c = [1, 1, 2, 2, 3] // 1
console.log(migratoryBirds(c));