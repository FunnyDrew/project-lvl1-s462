import { makeRandom } from '../utils';
import game from '..';

const gameDescription = 'What is the result of the expression?';

const maximumValue = 40;
const operatorSign = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return '+';
  }
};

const makeGameData = () => {
  const a = makeRandom(1, maximumValue);
  const b = makeRandom(1, maximumValue);
  const operator = operatorSign[makeRandom(0, operatorSign.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const answer = calculate(operator, a, b);
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
