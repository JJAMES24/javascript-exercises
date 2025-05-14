const convertToCelsius = function (fahrenheit) {
  let rawCelsius = 0;
  rawCelsius = ((fahrenheit - 32) * 5) / 9;
  let celsius = round(rawCelsius, 1);
  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let rawFahrenheit = 0;
  rawFahrenheit = (celsius * 9) / 5 + 32;
  fahrenheit = round(rawFahrenheit, 1);
  return fahrenheit;
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
