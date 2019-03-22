import randomCalc from '../utils';
import game from '..';

const gameDescription = 'What is the result of the expression?\n';

const maxNumInGame = 40;
const operatorArray = ['+', '-', '*'];

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
  const expressionNum1 = randomCalc(1, maxNumInGame);
  const experssionNum2 = randomCalc(1, maxNumInGame);
  const expresstionOperator = operatorArray[randomCalc(0, operatorArray.length - 1)];
  const questionData = `${expressionNum1} ${expresstionOperator} ${experssionNum2}`;
  const answerData = calculate(expresstionOperator, expressionNum1, experssionNum2);
  return [questionData, answerData];
};

export default () => game(gameDescription, makeGameData);
