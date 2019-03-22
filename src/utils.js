
const randomCalc = (minRangeValue, maxRangeValue) => minRangeValue
+ Math.round((maxRangeValue - minRangeValue) * Math.random());


const isEven = number => ((number % 2) === 0);

export { randomCalc, isEven };
