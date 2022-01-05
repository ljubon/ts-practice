function timeConversion(s: string): string {
    let result: string = ""
    if (s.length <= 10 && (s.endsWith('PM') || s.endsWith('AM'))) {
        let time = s.split(':')
        let hours: number | string = time[0] // get hours
        let sec = time[2].slice(0, 2) // get seconds

        if (s.endsWith('PM') && +hours < 12) {
            hours = +time[0] + 12
        } else if (s.endsWith('AM') && +hours == 12) {
            hours = "00"
        }
        result = hours.toString() + ":" + time[1] + ":" + sec.toString()
    }
    return result
}

let test1 = "12:00:00AM" // Return '00:00:00'.
let test12 = "1:00:00AM" // Return '2:00:00'.
let test13 = "12:01:00AM" // Return '00:01:00'.
let test14 = "01:01:00AM" // Return '00:01:00'.
let test2 = "1:59:00PM" // Return '12:00:00'.
let test21 = "9:00:00PM" // Return '9:00:00'.
console.log("Result: ", timeConversion(test1));
console.log("Result: ", timeConversion(test12));
console.log("Result: ", timeConversion(test13));
console.log("Result: ", timeConversion(test14));
console.log("Result: ", timeConversion(test2));
console.log("Result: ", timeConversion(test21));
