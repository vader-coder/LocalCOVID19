//this file contains a function that calculates
//the number of days the database started.
function days_since_start(month, date, year) {//all ints 1-12, 1-31, 2019->
  var days = 0;
  month--;//decrement by 1 so from 0-11 instead of 1-12
  let dPM20 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//days per month
  if (year > 2020) {
    var years_btw = year - 2020;
    days = years_btw*365;
  }
  if (year >= 2020) {
    for (var i = 0; i<month; i++) {//looping throgh months that aren't ours
      days+=dPM20[i];//add days in months past.
    }
    days+=date;//add date in current month, which is days into current month
  }
  if (year <= 2019 && month != 12 && day != 31) {
    return "Invalid"
  }
  //if year > 2020
  return days;
}
module.exports.days_since_start = days_since_start;//https://www.youtube.com/watch?v=Cxo4UKpHv5s
console.log(days_since_start(3, 13, 2020));//march 13, 2020: 73
console.log(days_since_start(1, 1, 2020));//jan 1, 2020: 1
console.log(days_since_start(5,13,2020));//134, as expected.
console.log(days_since_start(6, 1, 2021));//518
//is this a little inconsistent?
//they say 74 days, including end date.
//december 31 is day 0.
//january 1: has been 1 day since start.
