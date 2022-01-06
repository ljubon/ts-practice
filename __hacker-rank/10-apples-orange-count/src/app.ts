function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  let result: number[] = []
  if ((a < s && s < t && t < b) ) {
    let countApples: number = 0
    let countOranges: number = 0

    apples.forEach(d => {
      let distance = d + a
      if (distance > a && distance >= s && distance <= t) {
        countApples += 1
      }
    })

    oranges.forEach(d => {
      let distance = b + d
      if (distance < b && distance <= t && distance >= s) {
        countOranges += 1
      }
    })
    
    result = [countApples, countOranges]
  } 
  return console.log(result.join('\n'));
}


let s: number = 7, t: number = 11
let a: number = 5, b: number = 15
// let m: number = 3, n: number = 2
let apples: number[] = [-2, 2, 1], oranges: number[] = [5, -6]
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));

/*
    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree.

    The first line contains two space-separated integers denoting the respective values of S and T.
    The second line contains two space-separated integers denoting the respective values of A and B.
    The third line contains two space-separated integers denoting the respective values of M and N.
    The fourth line contains M space-separated integers denoting the respective distances that each apple falls from point A.
    The fifth line contains N space-separated integers denoting the respective distances that each orange falls from point B.
**/