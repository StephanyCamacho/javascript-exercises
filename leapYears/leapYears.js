const leapYears = function(year) {
    const centuryYr = year % 100 == 0 && year % 400 != 0;
    const leapYr    = year % 4 == 0;
  
    if (centuryYr || !leapYr) {
      return false;
    } else {
      return true;
    }
}

module.exports = leapYears
