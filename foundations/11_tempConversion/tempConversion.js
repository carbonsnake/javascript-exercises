const convertToCelsius = function(x) {
  const result = ((x - 32) * (5/9)); 
  if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function(x) {
  const result = (x * (9/5) + 32);
    if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
