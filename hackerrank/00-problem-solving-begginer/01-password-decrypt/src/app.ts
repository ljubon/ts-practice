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

function isCharNumeric(s: string) {
    return !isNaN(parseInt(s));
}

function deleteCharInString(s: string, n: number = 0): string {
    let result: string[] = convertStringToArray(s); // 43Ah*ck0rr0nk
    result.splice(n, 1)
    return convertArrToString(result) // 43Ah*ck0rr0nk
}

function swapChars(s: string, old: number, goal: number): string {
    let result: string[] = convertStringToArray(s);
    result[goal] = s[old]

    return convertArrToString(result)
}

function decryptPassword(s: string): string {
    // let arr = convertStringToArray(s);

    // let i = 0
    // while (i < arr.length - 1) {
    //     if (!isNaN(+arr[i]) && +arr[i] == 0) {
    //         arr[i] = arr[0] // copy first number value to position of 0
    //         arr[0] = ''  // remove first number
    //     } else if (
    //         (arr[i] == arr[i].toUpperCase()) &&
    //         (arr[i + 1] == arr[i + 1].toLowerCase()) &&
    //         (arr[i + 2] == '*'))
    //     {
    //         arr[i + 2] = '' // remove *
    //         let tmp = arr[i]
    //         arr[i] = arr[i + 1]
    //         arr[i + 1] = tmp
    //     } else {
    //         i += 1
    //     }
    // }
    let tmp = s

    return tmp
}

let hacker: string = "43Ah*ck0rr0nk" // hAck3rr4nk
let dummyString = 'Javascript is popular language'
console.log(decryptPassword(hacker));
console.log("Goal:\t\thAck3rr4nk");

// let test1: string = "51Pa*0Lp*0e"// aP1pL5e
// console.log(decryptPassword(test1));
// console.log("Goal:\taP1pL5e");

// let test2 = "pTo*Ta*O" // poTaTO
// console.log("poTaTO")
// console.log(decryptPassword(test2))