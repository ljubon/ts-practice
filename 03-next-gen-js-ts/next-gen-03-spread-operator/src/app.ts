// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// // function add(a: number, b: number) {
// //   let result;
// //   result = a + b;
// //   return result;
// // }

// // if (age > 20) {
// //   let isOld = true;
// // }

// // console.log(isOld);

// // console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);

// const person = {
//   name: 'Max',
//   age: 30
// };

// const copiedPerson = { ...person };

// Triplets
// function compareTriplets(a: number[], b: number[]): number[] {
//   let alice: number = 0
//   let bob: number = 0
//   for (let i in a) {
//     if ((+a[i] >= 1 && +a[i] <= 100) && (+b[i] >= 1 && +b[i] <= 100) && (+a[i] != +b[i])){
//       if (a[i] > b[i]) {
//         alice += 1
//         console.log("Alice:" + alice);
//       } else {
//         bob += 1
//         console.log("Bob:" + bob);
//       }
//     }
//   }
//   return [alice, bob]
// }

let a = [3,1,2]
let b = [2,1,1]
console.log(compareTriplets(a, b))