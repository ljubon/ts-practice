function convertArrToString(array: string[]): string {
    let string: string = ""
    array.forEach(x => {
        string += x
    })
    return string
}

function convertStringToArray(s: string): string[] {
    let result: string[] = s.split('')
    return result
}

function decryptPassword(s: string): string {
    let arr = convertStringToArray(s);
    
    let i = 0
    while (i < arr.length - 1) {
        if (+arr[i] === 0 ) {
            arr[arr.lastIndexOf('0')] = arr[0]
            arr.splice(0, 1)
        } else if (
            (arr[i] == arr[i].toUpperCase()) &&
            (arr[i + 1] == arr[i + 1].toLowerCase()) &&
            (arr[i + 2] == '*')
        ) {
            arr[i + 2] = ''
            let tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
        }
        i += 1
    }
    return convertArrToString(arr);
}

let encrypted: string = "51Pa*0Lp*0e"
let decrypted: string = "aP1pL5e"
// let encrypted: string = "51Pa*0Lp*0e"
// let decrypted: string = "aP1pL5e"
console.log("Encrypted:\t\t" + encrypted);
console.log("Decrypted:\t\t" + decryptPassword(encrypted));
console.log("Expected:\t\t" + decrypted);
(decrypted == decryptPassword(encrypted)) ? console.log("It works!") : console.log("Not yet...");
