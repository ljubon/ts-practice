function getDateMonth(year: number, dayInYear: number): number[] {
  let getNumberOfMonths = Math.floor(dayInYear / 30); // rounded to lower number
  let sum = 0, month = 0, day = 0;

  for (let i = 1; i <= Math.floor(getNumberOfMonths); i++) {
    let date = new Date(year, i, 0)
    let getDateNumber = date.getDate()
    sum += getDateNumber
  }

  let diffDay = dayInYear - sum
  if (diffDay <= 30) {
    month = Math.floor(getNumberOfMonths) + 1
    day = diffDay
  } else {
    month = Math.floor(getNumberOfMonths) + 2
    day = diffDay - 30
  }

  return [day, month]
}

function dayOfProgrammer(year: number): string {
  let result = ""
  let month = 0
  let day = 0

  if (year >= 1700 && year <= 2700) {

    if (year < 1918) { // Julian calendar
      let getDayMonth = getDateMonth(year, 256)
      if (year % 4 == 0) {
        day = getDayMonth[0] - 1
        month = getDayMonth[1]
      } else {
        day = getDayMonth[0]
        month = getDayMonth[1]
      }
      
    } else if (year == 1918) {
      // 26.09.1918
      day = 26 
      month = 9
    } else if (year >= 1919) { // Gregorian calendar
      let getDayMonth = getDateMonth(year, 256)
      if ( (year % 4 == 0 && year %  100 != 0) && year % 400 == 0){
        day = getDayMonth[0] -1
        month = getDayMonth[1]
      } else {
        day = getDayMonth[0]
        month = getDayMonth[1]
      }
    }

    let parsedMonth = ''
    if (month < 10) {
      parsedMonth = '0' + month
    } else {
      parsedMonth = month.toString()
    }
    result = `${day}.${parsedMonth}.${year}`
  }

  /** With Date(), but can't cover all cases 
    for (let m = 1; m <= 11; m += 1) {
      for (let d = 1; d <= 31; d += 1) {
        let currentDate = new Date(Date.UTC(year, m, d))
        let startDate = new Date(Date.UTC(year, 0, 0))
        let diff = +currentDate - +startDate;
        let oneDay = 1000 * 60 * 60 * 24;
        if (+currentDate.getUTCFullYear() ==  1800) {
          if (Math.floor(diff / oneDay) == 256) {
            // console.log("Year 1800 ", currentDate, startDate, diff, oneDay);
            let dd = currentDate.getUTCDate()
            let mm = "0" + (currentDate.getUTCMonth() + 1)
            result = `${dd - 1}.${mm}.${year}`
            // console.log(result)
          }; 
        } else {
          // console.log("Not 1800 ", currentDate, startDate, diff, oneDay);
          if (Math.floor(diff / oneDay) == 256) {
            let dd = currentDate.getUTCDate()
            let mm = "0" + (currentDate.getUTCMonth() + 1)
            result = `${dd}.${mm}.${year}`
            // console.log(result)
          }
        }
      }
    }
 */
  return result
}

let a = 2017; // 13.09.2017
(dayOfProgrammer(a) == "13.09.2017") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(a) + " is not 13.09.2017")

let b = 2016; // 12.09.2016
(dayOfProgrammer(b) == "12.09.2016") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(b) + " is not 12.09.2016")

let c = 1800; // 12.09.1800
(dayOfProgrammer(c) == "12.09.1800") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(c) + " is not 12.09.1800")

let d = 1984; // 12.09.1984
(dayOfProgrammer(d) == "12.09.1984") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(d) + "is not 12.09.1984")

let e: number = 1700; // 12.09.1700
(dayOfProgrammer(e) == "12.09.1700") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(e) + " is not 12.09.1700")

let f = 1900; // 12.09.1900
(dayOfProgrammer(f) == "12.09.1900") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(f) + " is not 12.09.1900")

let g = 1918; // 26.09.1918
(dayOfProgrammer(g) == "26.09.1918") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(g) + " is not 26.09.1918")

let i: number = 1908; // 12.09.1908
(dayOfProgrammer(i) == "12.09.1908") ? console.log("It works!") : console.log("Not yet... " + dayOfProgrammer(i) + " is not 12.09.1908")