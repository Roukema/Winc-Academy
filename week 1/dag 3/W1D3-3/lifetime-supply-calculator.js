const dead = 92;
const calculateSupply = function(age, amount) {
  return (dead - age) * (amount * 365);
};
console.log(
  "You will need " +
    calculateSupply(27, 4) +
    " to last you until the ripe old age of " +
    dead
);
