
const makeRandom = (minRangeValue, maxRangeValue) => minRangeValue
+ Math.round((maxRangeValue - minRangeValue) * Math.random());

export { makeRandom };
