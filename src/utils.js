
const randomCalc = (minRangeValue, maxRangeValue) => minRangeValue
+ Math.round((maxRangeValue - minRangeValue) * Math.random());

const gcdCalculation = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else num2 %= num1;
  }
  return num1 + num2;
};
export { gcdCalculation, randomCalc };
