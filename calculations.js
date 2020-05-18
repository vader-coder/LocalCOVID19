//this file contains a function that calculates
//the number of days the database started.
var days_since_start = function(month, date, year) {//all ints 1-12, 1-31, 2019->
  var days = 0;
  month--;//decrement by 1 so from 0-11 instead of 1-12
  let dPM20 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//days per month
  if (year == 2020) {
    for (var i = 0; i<month; i++) {//looping throgh months that aren't ours
      days+=dPM20[i];//add days in months past.
    }
    days+=date;//add date in current month, which is days into current month
  }
  //if year > 2020
  return days;
}
console.log(days_since_start(3, 13, 2020));//march 13, 2020: 73
console.log(days_since_start(1, 1, 2020));//jan 1, 2020: 1
console.log(days_since_start(5,13,2020));//134, as expected.
//is this a little inconsistent?
//they say 74 days, including end date.
//december 31 is day 0.
//january 1: has been 1 day since start.
