import randomCalc from '../utils';
import game from './game-engine';

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

const getTask = () => `${randomCalc(1, maxNumInGame)} ${operatorArray[randomCalc(0, 2)]} ${randomCalc(1, maxNumInGame)}`;


const getCorrectAnswer = (str) => {
  const splitedString = str.split(' ');
  const result = calculate(splitedString[1], Number(splitedString[0]), Number(splitedString[2]));
  return `${result}`;
};

export default () => game(gameDescription, getTask, getCorrectAnswer);
