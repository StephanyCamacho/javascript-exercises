const ftoc = function (fahrenheit) {
  const tempF = (fahrenheit - 32) * (5 / 9);
  return (tempF % 1 === 0) ? tempF : parseFloat(tempF.toFixed(1))
}

const ctof = function (celsius) {
  const tempC = (celsius * (9 / 5)) + 32;
  return (tempC % 1 === 0) ? tempC : parseFloat(tempC.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
