import { randomCalc, isEven } from '../utils';
import game from '..';

const maximumValue = 1000;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (isEven(number)) {
    return false;
  }
  const iter = (counter) => {
    if (counter > number / 2) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const makeGameData = () => {
  const question = randomCalc(1, maximumValue);
  const answer = (isPrime(question) ? 'yes' : 'no');

  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
