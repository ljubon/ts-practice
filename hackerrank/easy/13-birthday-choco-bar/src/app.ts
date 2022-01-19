function birthday(s: number[], d: number, m: number): number {
  let result: number = 0

  if (s.length >= 1 && s.length <= 100 && d >= 1 && d <= 31 && m >= 1 && m <= 12) {
    s.forEach((x, i) => {
      if (x >= 1 && x <= 5 && i < s.length) {

        let check = true
        let sum = s[i]
        while (check) {

          // single value 
          if (sum == d && s.length == m) {
            result++
            check = false
          } else {

            // sum of M squares 
            for (let a = 1; a < m; a++) {
              sum = sum + s[i + a]
            }

            // Check
            if (sum == d) {
              result++
            } else {
              check = false
            }
          }

        }
      }
    })
  }
  return result
}

// 16
// d=26 m=8
let testCase13: number[] = [2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2];
(birthday(testCase13, 26, 8) == 16) ? console.log("It works!") : console.log("Not yet...");

// 2
(birthday([1, 2, 1, 3, 2], 3, 2) == 2) ? console.log("It works!") : console.log("Not yet...");

// // 2 (2+2, 1+3) 
(birthday([2, 2, 1, 3, 2], 4, 2) == 2) ? console.log("It works!") : console.log("Not yet...");

// // 0
(birthday([1, 1, 1, 1, 1, 1], 3, 2) == 0) ? console.log("It works!") : console.log("Not yet...");

// // 1
(birthday([4], 4, 1) == 1) ? console.log("It works!") : console.log("Not yet...");