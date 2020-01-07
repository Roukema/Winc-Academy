const celsiusToFahrenheit = function(celsius) {
  let isFahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + " C is " + isFahrenheit + " F");
};
const fahrenheitToCelsius = function(fahrenheit) {
  let iscelsius = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + " F is " + iscelsius + " C");
};
celsiusToFahrenheit(21);
fahrenheitToCelsius(70);
