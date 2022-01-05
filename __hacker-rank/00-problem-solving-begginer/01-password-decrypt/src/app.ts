function decryptPassword(s: string): string {
    let result: string = ""
    let original: string = ""
    let arr: string[] = s.split('')


    arr.forEach(x => {
        original += x
    })
    console.log("Before:\t\t" + original);

    // 43Ah*ck0rr0nk => hAck3rr4nk

    let i: number = arr.length - 1
    let tmpIndex: number = arr.length - 1
    while (i <= arr.length -1 && i != 0) {
        arr.forEach(s => {

            if (!isNaN(+s) && +s == 0) {
                arr[0] = s
                arr.splice(arr.indexOf("0"), -1)

                let tmpArr = ""
                arr.forEach(s => {
                    tmpArr += s
                })
                console.log("===> Number: " + i + " - " + s + " lastIndex: " + tmpIndex + " arr: " + tmpArr);
            }
            else if (
                (s == s.toUpperCase()) &&
                (arr[i + 1] == arr[i + 1].toLowerCase()) &&
                (arr[i + 2] == "*")) {
                let tmp = s
                arr[i] == arr[i + 1]
                arr[i + 1] == tmp
                arr.splice(i + 2, 1)
                i += 1

                let tmpArr = ""
                arr.forEach(s => {
                    tmpArr += s
                })
                console.log("===> Number: " + i + " - " + s + " arr: " + tmpArr);
            } else {
                i += 1

                let tmpArr = ""
                arr.forEach(s => {
                    tmpArr += s
                })
                console.log("===> Number: " + i + " - " + s + " arr: " + tmpArr);
            }
        })
    }

    // Convert to string
    arr.reverse().forEach(s => {
        result += s
    })
    return "After:\t\t" + result
}

// let test1: string = "51Pa*0Lp*0e"// aP1pL5e
// console.log(decryptPassword(test1));
// console.log("Goal:\taP1pL5e");

let hacker: string = "43Ah*ck0rr0nk" // hAck3rr4nk
console.log(decryptPassword(hacker));
console.log("Goal:\t\thAck3rr4nk");

// let test2 = "pTo*Ta*O" // poTaTO
// console.log("poTaTO")
// console.log(decryptPassword(test2))


// Convert to string
// let test: string[] = hacker.split('')
// console.log(test.length);
// console.log(test.slice(1));

