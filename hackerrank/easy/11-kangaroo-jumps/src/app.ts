function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  let result = "NO"
  let i = 1
  let condition = true

  if (x1 >= 0 && x1 < x2 && x2 <= 10000 && v1 >= 1 && v1 <= 10000 && v2 >= 1 && v2 <= 10000) {

    while (i <= 10000 && condition == true) {
      x1 += v1, x2 += v2
      if (x1 == x2) {
        condition = false
        result = "YES"
      }
      i += 1
    }

  } else {
    result = "NO"
  }

  return result
}


// let x1: number = 0, v1: number = 3
// let x2: number = 4, v2: number = 2
let x1: number = 0, v1: number = 2
let x2: number = 5, v2: number = 3

console.log(kangaroo(x1, v1, x2, v2));