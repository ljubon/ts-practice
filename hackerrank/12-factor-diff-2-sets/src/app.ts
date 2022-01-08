function getTotalX(a: number[], b: number[]): number {
  let result: number[] = []
  let resA: number[] = []

  if ((a.length >= 1 && a.length <= 10) && (b.length >= 1 && b.length <= 10)) {

    for (let i = Math.max(...a); i <= Math.min(...b); i++) {

      let checkI: boolean = true
      a.forEach(aVal => {
        if (i % aVal != 0) {
          checkI = false
        }
      })

      if (checkI) {
        let checkX: boolean = true
        b.forEach(bVal => {
          if (bVal % i != 0) {
            checkX = false
          }
        })
  
        if (checkX) {
          result.push(i)
          // console.log(result);
        }
      }
      
    }
  } 
  return result.length
}

// 2 (6, 12) 
(getTotalX([2, 6], [24, 36]) == 2) ? console.log("It works!") : console.log("Not yet...");

// 3
(getTotalX([2, 4], [16, 32, 96]) == 3) ? console.log("It works!") : console.log("Not yet...");

// // 2
(getTotalX([3, 4], [24, 48]) == 2) ? console.log("It works! ") : console.log("Not yet...");


