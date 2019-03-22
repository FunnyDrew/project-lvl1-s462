import { randomCalc } from '../utils';
import game from '..';

const gameDescription = 'What is the result of the expression?\n';

const maximumValue = 40;
const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

const makeGameData = () => {
  const firstNumericElement = randomCalc(1, maximumValue);
  const secondNumericElement = randomCalc(1, maximumValue);
  const expresstionOperator = operators[randomCalc(0, operators.length - 1)];
  const question = `${firstNumericElement} ${expresstionOperator} ${secondNumericElement}`;
  const answer = calculate(expresstionOperator, firstNumericElement, secondNumericElement);
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
