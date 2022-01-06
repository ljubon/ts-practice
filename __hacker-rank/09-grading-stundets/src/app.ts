function gradingStudents(grades: number[]): number[] {   
    let result: number[] = grades
    let i = 0
    while (i < result.length){
      let mode = +result[i] % 5
      if (+mode > 2 && +result[i] > 37 ){
        result[i] = result[i] + (5 - mode)
      }
      i += 1
    }
    return result
}

let test = [26, 56, 84, 53, 88, 68]
console.log("Result: ", gradingStudents(test));

