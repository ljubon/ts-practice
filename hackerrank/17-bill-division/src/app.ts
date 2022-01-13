function bonAppetit(bill: number[], k: number, b: number): void {
  let result: string | number = ''

  let tmpSumBill = 0;
  for (let i = 0; i < bill.length; i++){
    tmpSumBill += bill[i]
  }
  let sharedItems = tmpSumBill - bill[k]
  let costPerPerson = sharedItems / 2

  if (costPerPerson == b) {
    result = 'Bon Appetit'
  } else {
    result = b - costPerPerson
  }
  console.log(result);
}


let bill = [3, 10, 2, 9]
let k = 1 // index - ana doesn't eat
let b = 12 // ana's bill
bonAppetit(bill, k, b)

let bill1 = [3, 10, 2, 9]
let k1 = 1 // index - ana doesn't eat
let b1 = 7 // ana's bill
bonAppetit(bill1, k1, b1)