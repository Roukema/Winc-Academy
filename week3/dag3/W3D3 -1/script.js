const sum = (...cijfers) =>
  cijfers.reduce((p, c) => {
    return p + c;
  });

console.log(sum(1, 2, 3, 4, 4));

const num = (num1, num2, num3) => num1 + num2 + num3;

const nummers = [1, 3, 5];
console.log(num(...nummers));
