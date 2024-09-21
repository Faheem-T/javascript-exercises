const convertToCelsius = function(temp) {
  return Math.round((temp - 32) / (9/5) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  return Math.round((temp * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
