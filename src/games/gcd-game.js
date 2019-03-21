import randomCalc from '../utils';
import game from './game-engine';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const maxNumInGame = 50;

const getTask = () => `${randomCalc(1, maxNumInGame)} ${randomCalc(1, maxNumInGame)}`;


const getCorrectAnswer = (str) => {
  const splitedString = str.split(' ');
  let num1 = splitedString[0];
  let num2 = splitedString[1];
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else num2 %= num1;
  }
  return num1 + num2;
};

export default () => game(gameDescription, getTask, getCorrectAnswer);
