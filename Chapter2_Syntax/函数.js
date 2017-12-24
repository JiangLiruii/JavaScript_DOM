function shout() {
  const beatles = ['John', 'Paul', 'George', 'Ringo'];
  for (let i = 0; i < beatles.length; i++) {
    alert(beatles[i]);
  }
}

function multiple(num1, num2) {
  const total = num1 * num2;
  alert(total);
}
multiple(10, 20);

function convertToCelsius(temp) {
  const result = (temp - 32) / 1.8;
  return result;
}
convertToCelsius(10);
